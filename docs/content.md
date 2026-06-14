# cep146-git-practice-game: Level-by-Level Content

## LEVEL 1
> Learn to interact with the file system using the Linux CLI, create a clean directory workspace, set up your global developer identity, and initialize an empty repository instance.

**Commands:** `pwd`, `mkdir`, `cd`, `git config`, `git init`

### Tasks

#### Task 1.1 - Current Work Directory
* **Instruction:** Before initializing a project, check where you are. Print the current working path.
* **Expected Input Syntax:** `pwd`
* **Engine Success Trigger:** Print simulated path output `/home/seneca/projects` to console.

#### Task 1.2 - Create Folder
* **Instruction:** Create a new directory called `git-game`.
* **Expected Input Syntax:** `mkdir git-game`
* **Engine Success Trigger:** Display an empty gray directory labeled `[git-game]`.

#### Task 1.3 - Move into the Folder
* **Instruction:** Change your current location to the new `git-game` directory.
* **Expected Input Syntax:** `cd git-game`
* **Engine Success Trigger:** Terminal prompt displays `~/projects/git-game$` instead of `~/projects$`.

#### Task 1.4 - Configure User Name
* **Instruction:** Git requires an author identity for commits. Configure your global system user name to be "Aleksandra".
* **Expected Input Syntax:** `git config --global user.name "Aleksandra"`
* **Engine Success Trigger:** Save name parameter to internal local configuration state tracker.

#### Task 1.5 - Configure User Email
* **Instruction:** Complete your global identity setup by linking your email address to "student@senecapolytechnic.ca".
* **Expected Input Syntax:** `git config --global user.email "student@senecapolytechnic.ca"`
* **Engine Success Trigger:** Save email parameter and unlock local commit capability engine.

#### Task 1.6 - Init Git Repo
* **Instruction:** Convert this plain folder into an active, local tracking Git version control repository.
* **Expected Input Syntax:** `git init`
* **Engine Success Trigger:** Display `.git/` folder and success message in workspace canvas.

---

## LEVEL 2
> Understand working directory, staging, and commits. Learn to inspect lines of modification and review historical logs before saving.

**Commands:** `touch`, `git status`, `git diff`, `git add`, `git commit`, `git log`

### Tasks

#### Task 2.1 - Create File
* **Instruction:** Create a text file named `index.html`.
* **Expected Input Syntax:** `touch index.html`
* **Engine Success Trigger:** Displays red colored untracked file `index.html`.

#### Task 2.2 - Check Repository Status
* **Instruction:** Check the active state of your repository to verify how Git sees your new file.
* **Expected Input Syntax:** `git status`
* **Engine Success Trigger:** Print standard terminal output showing an untracked `index.html` file in red text.

#### Task 2.3 - View File Differences
* *(Note: The game engine acts as if a line of code has been written inside the file behind the scenes for this step).*
* **Instruction:** Before staging your changes, inspect the exact modifications made to the lines inside your file.
* **Expected Input Syntax:** `git diff`
* **Engine Success Trigger:** Print standard terminal diff layout displaying green addition markers like `+ <h1>Hello Git</h1>`.

#### Task 2.4 - Stage File
* **Instruction:** Move the `index.html` file into the Staging Area to prepare it for your milestone checkpoint.
* **Expected Input Syntax:** `git add index.html`
* **Engine Success Trigger:** `index.html` file turns from red into green on the visual canvas.

#### Task 2.5 - Create Commit
* **Instruction:** Permanently commit your staged changes into the repository history with a message labeled "initial setup".
* **Expected Input Syntax:** `git commit -m "initial setup"`
* **Engine Success Trigger:** Displays a new commit node (C1) in the visual history graph tracking timeline.

#### Task 2.6 - View Commit Log History
* **Instruction:** Review your repository's commit history logs to confirm your milestone is logged with its author and hash.
* **Expected Input Syntax:** `git log`
* **Engine Success Trigger:** Print a clean terminal log block displaying: `commit [HASH_KEY]`, `Author: Aleksandra`, and the tracking message.

---

## LEVEL 3
> Learn to create separate branches of development to work on features without impacting main branch.

**Commands:** `git branch`, `git checkout`, `git switch`, `git merge`, `git merge --abort`

### Tasks

#### Task 3.1 - Create a Branch
* **Instruction:** Create a new feature branch named `feature-ui`.
* **Expected Input Syntax:** `git branch feature-ui`
* **Engine Success Trigger:** Displays an extension pointer node breaking off from the main timeline canvas.

#### Task 3.2 - Switch to the New Branch
* **Instruction:** Change your active context to work on the `feature-ui` branch using the traditional checkout syntax.
* **Expected Input Syntax:** `git checkout feature-ui`
* **Engine Success Trigger:** Terminal prompt updates to display `~/git-game (feature-ui)$`.

#### Task 3.3 - Use Modern Switch Syntax
* **Instruction:** Switch back to the stable main development branch using the modern alternative command line keyword.
* **Expected Input Syntax:** `git switch main`
* **Engine Success Trigger:** Terminal prompt state updates to display `~/git-game (main)$`.

#### Task 3.4 - Experience an Unexpected Merge Conflict
* *(Note: The game engine acts as if a conflicting modification has been committed to main and feature-ui lines simultaneously).*
* **Instruction:** Attempt to merge the changes from `feature-ui` directly into your active `main` branch.
* **Expected Input Syntax:** `git merge feature-ui`
* **Engine Success Trigger:** Print conflict warning: *"CONFLICT (content): Merge conflict in index.html. Automatic merge failed"*. Visual canvas highlights conflict zone boxes in orange.

#### Task 3.5 - Emergency Merge Abort
* **Instruction:** You are not ready to manually sort this conflict line-by-line right now. Run the safety-net command to cancel the merge entirely and reset to your clean state.
* **Expected Input Syntax:** `git merge --abort`
* **Engine Success Trigger:** Clears conflict errors and resets visual canvas to a stable layout state before the merge attempt.

---

## LEVEL 4
> Link a local repository to Github and sync data back and forth across machines.

**Commands:** `git clone`, `git remote add`, `git push`, `git fetch`, `git pull`

### Tasks

#### Task 4.1 - Clone a Remote Repository
* **Instruction:** Download a copy of an existing remote repository hosted at `https://github.com/seneca/template.git` to initialize your workspace templates.
* **Expected Input Syntax:** `git clone https://github.com/seneca/template.git`
* **Engine Success Trigger:** Visual canvas draws an animated loading download sequence pulling the archive layout down to your computer.

#### Task 4.2 - Link Local Project to a Remote URL
* **Instruction:** For your local `git-game` project, add a remote server connection named "origin" pointing to the address `https://github.com/seneca/game.git`.
* **Expected Input Syntax:** `git remote add origin https://github.com/seneca/game.git`
* **Engine Success Trigger:** Displays a cloud server graphic node labeled "Remote Server [origin]" on the right-hand layout dashboard.

#### Task 4.3 - Push Local Milestones to the Cloud
* **Instruction:** Upload your local repository tracking history checkpoints from your local machine up to the remote cloud server's main branch.
* **Expected Input Syntax:** `git push origin main`
* **Engine Success Trigger:** Plays a vertical data packet upload animation on the canvas showing local code updating the server box.

#### Task 4.4 - Fetch Server Changes
* **Instruction:** Download the newest branch tracking details and commits uploaded by your project partner to the server without merging them into your local working files yet.
* **Expected Input Syntax:** `git fetch origin`
* **Engine Success Trigger:** Visual tracker displays hidden remote reference pointer changes without modifying local file components.

#### Task 4.5 - Pull Down and Integrate Updates
* **Instruction:** Fetch and automatically merge the newest modifications from the remote server's main branch straight into your active local workspace.
* **Expected Input Syntax:** `git pull origin main`
* **Engine Success Trigger:** Displays down-arrow transition and instantly updates the visual file tree arrays on your dashboard to map the synchronized cloud state.