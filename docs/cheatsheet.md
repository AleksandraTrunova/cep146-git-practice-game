# cep146-git-practice-game: Reference Cheat Sheet

This reference manual is organized explicitly by game levels to assist you during your practice challenges. It details the precise syntax, common option flags, and real-world behavior of each command encountered throughout the curriculum.

---

## LEVEL 1: Workspace Setup, Navigation, & Identity

### pwd
* **Full Name:** Print Working Directory
* **Purpose:** Outputs the absolute path of your current location within the system's folder hierarchy.
* **Standard Syntax:** `pwd`

### mkdir
* **Full Name:** Make Directory
* **Purpose:** Creates a brand new, empty folder at your current folder location.
* **Standard Syntax:** `mkdir <folder_name>`
* **Example:** `mkdir git-game`

### cd
* **Full Name:** Change Directory
* **Purpose:** Shifts your active command line terminal location to a different target folder path.
* **Standard Syntax:** `cd <target_path>`
* **Example:** `cd git-game`
* **Shortcut Note:** Typing `cd ..` moves you backward up one level out of your current folder.

### git config
* **Purpose:** Configures structural system parameters and user identity details required to sign your development checkpoints.
* **Standard Syntax:** `git config --global <parameter_key> "<value>"`
* **Key Identification Flags:**
    * `--global`: Applies the configuration adjustments across all repositories on your entire computer.
* **Examples:**
    * `git config --global user.name "Aleksandra"`
    * `git config --global user.email "student@senecapolytechnic.ca"`

### git init
* **Purpose:** Initializes a completely fresh, empty local Git repository tracking instance inside your active folder workspace.
* **Standard Syntax:** `git init`
* **System Action:** Generates a hidden, trackable administrative folder named `.git/` in the root of the path directory.

---

## LEVEL 2: Tracking Changes & Local Commits

### touch
* **Purpose:** Creates a blank, empty tracking file structure if the targeted filename does not already exist.
* **Standard Syntax:** `touch <filename>`
* **Example:** `touch index.html`

### git status
* **Purpose:** Displays the active differential status conditions of your repository workspace, showing tracked, untracked, staged, or modified files.
* **Standard Syntax:** `git status`

### git diff
* **Purpose:** Compares line-by-line differences between the edits in your current working directory and your last stable committed baseline.
* **Standard Syntax:** `git diff`
* **Output Reading Guide:** Red text streams marked with a minus symbol (`-`) show line deletions; green text streams marked with a plus symbol (`+`) show line additions.

### git add
* **Purpose:** Elevates file adjustments out of your local working space and seals them inside the Git Staging Area to group them for a snapshot.
* **Standard Syntax:** `git add <target_file>`
* **Example:** `git add index.html`
* **Shortcut Note:** You can type `git add .` to automatically stage all changed assets within your current directory tree.

### git commit
* **Purpose:** Permanently records your staged package modifications into a secure historical snapshot node in the local repository timeline.
* **Standard Syntax:** `git commit -m "<descriptive_message_string>"`
* **Key Identification Flags:**
    * `-m`: Attaches the required clear tracking log summary explanation inline.
* **Example:** `git commit -m "initial setup"`

### git log
* **Purpose:** Outputs the complete chronological list of verified commits saved inside the active repository branch timeline.
* **Standard Syntax:** `git log`
* **Output Details:** Displays the unique commit SHA hash code, author identity metadata, timestamp data, and documentation descriptions.

---

## LEVEL 3: Branching & Conflict Interventions

### git branch
* **Purpose:** Inventories all existing branch lines or generates an independent development branch pathway off your active commit baseline.
* **Standard Syntax (List All):** `git branch`
* **Standard Syntax (Create New):** `git branch <new_branch_name>`
* **Example:** `git branch feature-ui`

### git checkout
* **Purpose:** Switches your active terminal system context to target a different branch timeline or rolls back working files.
* **Standard Syntax:** `git checkout <target_branch>`
* **Example:** `git checkout feature-ui`

### git switch
* **Purpose:** A modern alternative command explicitly engineered to handle branch context transitions cleanly, separating itself from file restore actions.
* **Standard Syntax:** `git switch <target_branch>`
* **Example:** `git switch main`

### git merge
* **Purpose:** Integrates historical commit development sequences from a target feature branch straight into your current active branch line.
* **Standard Syntax:** `git merge <feature_branch_to_pull_in>`
* **Example:** `git merge feature-ui`

### git merge --abort
* **Purpose:** An emergency recovery command line option that safely intercepts a blocked merge conflict cycle, stopping the integration process and resetting files to the clean state before the merge attempt.
* **Standard Syntax:** `git merge --abort`

---

## LEVEL 4: Remote Repositories & Collaboration

### git clone
* **Purpose:** Downloads a complete local repository replica from a hosted online tracking server endpoint link, setting up automatic tracking links.
* **Standard Syntax:** `git clone <remote_repository_url>`
* **Example:** `git clone https://github.com/seneca/template.git`

### git remote add
* **Purpose:** Map-links your local development directory framework to a remote online hosting server URL under a shorthand name hook.
* **Standard Syntax:** `git remote add <shorthand_label> <remote_server_url>`
* **Example:** `git remote add origin https://github.com/seneca/game.git`

### git push
* **Purpose:** Transports your verified local commit history modifications up into a matching hosted cloud server tracking branch directory.
* **Standard Syntax:** `git push <remote_label> <branch_name>`
* **Example:** `git push origin main`

### git fetch
* **Purpose:** Downloads and inspects tracking details, metadata modifications, and remote branch points from the online server baseline without editing or altering any of your local working file structures.
* **Standard Syntax:** `git fetch <remote_label>`
* **Example:** `git fetch origin`

### git pull
* **Purpose:** Simultaneously fetches and instantly executes a merge step to grab remote tracking server modifications and map them into your current active working local directory files.
* **Standard Syntax:** `git pull <remote_label> <branch_name>`
* **Example:** `git pull origin main`

---
All the information is take from [official GIT documentation](https://git-scm.com/docs/)