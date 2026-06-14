const DATA_URL = "docs/questions.json";
const ACTIVE_LEVEL_ID = 1;

const elements = {
  progress: document.getElementById("progress"),
  levelBadge: document.getElementById("level-badge"),
  levelTitle: document.getElementById("level-title"),
  levelObjective: document.getElementById("level-objective"),
  commands: document.getElementById("commands"),
  taskName: document.getElementById("task-name"),
  taskInstruction: document.getElementById("task-instruction"),
  hintBtn: document.getElementById("hint-btn"),
  hintText: document.getElementById("hint-text"),
  terminalOutput: document.getElementById("terminal-output"),
  terminalForm: document.getElementById("terminal-form"),
  commandInput: document.getElementById("command-input"),
  terminalPanel: document.getElementById("terminal-panel"),
};

const state = {
  levels: [],
  levelIndex: 0,
  taskIndex: 0,
  attempts: 0,
  uiState: "start",

  get currentLevel() {
    return this.levels[this.levelIndex];
  },
  get currentTask() {
    return this.currentLevel?.tasks[this.taskIndex];
  },
  get isComplete() {
    return this.levels.length > 0 && this.levelIndex >= this.levels.length;
  },

  applyUiState(triggerState) {
    this.uiState = triggerState || "unknown";
    elements.terminalPanel.dataset.uiState = this.uiState;
  },

  advance() {
    this.attempts = 0;
    const level = this.currentLevel;
    if (this.taskIndex < level.tasks.length - 1) {
      this.taskIndex += 1;
    } else {
      this.levelIndex += 1;
      this.taskIndex = 0;
    }
  },
};

function normalizeInput(value, rules = {}) {
  let result = String(value);
  if (rules.trim !== false) result = result.trim();
  if (rules.collapseSpaces !== false) result = result.replace(/\s+/g, " ");
  if (rules.normalizeQuotes !== false) result = result.replace(/['"\u2018\u2019\u201C\u201D]/g, '"');
  if (rules.ignoreCase) result = result.toLowerCase();
  return result;
}

function buildValidation(task) {
  if (task.validation) return task.validation;
  return {
    type: "exact",
    accepted: [task.expectedInput],
    normalize: { trim: true, collapseSpaces: true, normalizeQuotes: true, ignoreCase: false },
  };
}

function validate(input, validation) {
  const norm = normalizeInput(input, validation.normalize);
  const accepted = validation.accepted || [];

  switch (validation.type) {
    case "exact":
      return accepted.some((a) => norm === normalizeInput(a, validation.normalize));
    case "contains":
      return accepted.some((a) => norm.includes(normalizeInput(a, validation.normalize)));
    case "regex":
      return accepted.some((pattern) => {
        const flags = validation.normalize?.ignoreCase ? "i" : "";
        return new RegExp(pattern, flags).test(norm);
      });
    default:
      console.warn("Unknown validation type:", validation.type);
      return false;
  }
}

const LINE_BASE = "m-0 mb-1 whitespace-pre-wrap break-words";
const LINE_COLORS = {
  cmd: "text-slate-100",
  success: "text-green-500",
  error: "text-red-500",
  info: "text-slate-500",
  system: "text-blue-400",
};

function printLine(text, kind = "info") {
  const line = document.createElement("p");
  line.className = `${LINE_BASE} ${LINE_COLORS[kind] || LINE_COLORS.info}`;
  if (kind === "cmd") {
    line.innerHTML =
      '<span class="mr-2 text-green-500">user@git-practice:~$</span>' + escapeHtml(text);
  } else {
    line.textContent = text;
  }
  elements.terminalOutput.appendChild(line);
  elements.terminalOutput.scrollTop = elements.terminalOutput.scrollHeight;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderTask() {
  if (state.isComplete) return renderComplete();

  const level = state.currentLevel;
  const task = state.currentTask;

  elements.levelBadge.textContent = `LEVEL ${level.id}`;
  elements.levelTitle.textContent = level.title;
  elements.levelObjective.textContent = level.objective;

  elements.commands.innerHTML = "";
  (level.commands || level.commandsIntroduced || []).forEach((cmd) => {
    const chip = document.createElement("span");
    chip.className =
      "rounded-md border border-green-500/35 bg-green-700/10 px-[9px] py-[3px] text-xs text-green-500";
    chip.textContent = cmd;
    elements.commands.appendChild(chip);
  });

  elements.taskName.textContent = task.name;
  elements.taskInstruction.textContent = task.instruction;

  elements.hintText.textContent = task.hint || "";
  elements.hintText.classList.add("hidden");
  elements.hintBtn.disabled = false;
  elements.hintBtn.textContent = "show hint";

  renderProgress();
}

function renderProgress() {
  const total = state.levels.length;
  const current = Math.min(state.levelIndex + 1, total);
  elements.progress.textContent = `Level ${current} / ${total}`;
}

function renderComplete() {
  elements.levelBadge.textContent = "DONE";
  elements.levelTitle.textContent = "Level 1 complete";
  elements.levelObjective.textContent = "Workspace setup and navigation done. More levels coming soon.";
  elements.commands.innerHTML = "";
  elements.taskName.textContent = "";
  elements.taskInstruction.textContent = "";
  elements.hintBtn.disabled = true;
  elements.hintText.classList.add("hidden");
  elements.commandInput.disabled = true;
  elements.commandInput.placeholder = "session finished";

  const banner = document.createElement("div");
  banner.className =
    "mt-[14px] rounded-[10px] border border-dashed border-green-500 p-4 text-center text-green-500";
  banner.textContent = "Level 1 complete. git init successful.";
  elements.terminalOutput.appendChild(banner);
  elements.terminalOutput.scrollTop = elements.terminalOutput.scrollHeight;
  renderProgress();
}

function handleCommand(rawInput) {
  const input = rawInput.trim();
  if (!input) return;

  printLine(input, "cmd");

  if (state.isComplete) return;

  const task = state.currentTask;
  state.attempts += 1;

  if (validate(input, buildValidation(task))) {
    printLine(task.successMessage, "success");
    state.applyUiState(task.uiTriggerState);
    state.advance();

    if (state.isComplete) {
      renderComplete();
    } else {
      const justStartedNewLevel = state.taskIndex === 0;
      if (justStartedNewLevel) {
        printLine(`— ${state.currentLevel.title} —`, "system");
      }
      renderTask();
    }
  } else {
    printLine("Not quite. Try again, or reveal the hint.", "error");
    if (state.attempts >= 2 && task.hint) {
      elements.hintText.textContent = task.hint;
      elements.hintText.classList.remove("hidden");
      elements.hintBtn.disabled = true;
    }
  }
}

elements.terminalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCommand(elements.commandInput.value);
  elements.commandInput.value = "";
  elements.commandInput.focus();
});

elements.hintBtn.addEventListener("click", () => {
  elements.hintText.classList.remove("hidden");
  elements.hintBtn.disabled = true;
});

async function loadData() {
  const res = await fetch(DATA_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function init() {
  try {
    const data = await loadData();
    const allLevels = Array.isArray(data.levels) ? data.levels : [];
    state.levels = allLevels.filter((level) => level.id === ACTIVE_LEVEL_ID);
  } catch (err) {
    elements.levelTitle.textContent = "Could not load questions.json";
    printLine("Failed to load docs/questions.json.", "error");
    printLine(
      "Browsers block reading local files directly. Serve the folder first, e.g.:",
      "info"
    );
    printLine("    python3 -m http.server", "system");
    printLine("then open http://localhost:8000 in your browser.", "info");
    console.error(err);
    return;
  }

  if (state.levels.length === 0) {
    printLine(`Level ${ACTIVE_LEVEL_ID} not found in questions.json.`, "error");
    return;
  }

  printLine("Welcome to git::practice. Type the command each task asks for.", "system");
  printLine(`— ${state.currentLevel.title} —`, "system");
  renderTask();
  elements.commandInput.focus();
}

init();
