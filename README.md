# React + Vite

📌 Tools Overview
ESLint: Linting tool to identify and fix problems in JavaScript/TypeScript code.

Prettier: Formatter to enforce consistent code style.

Husky: Git hooks manager to run scripts at different stages (e.g., before commit).

Lint-Staged: Runs linters only on staged files.

Commitlint: Validates commit messages against conventional commit rules.

✅ Steps to Set Up
1. Install Required Development Dependencies
Install Husky, Lint-Staged, ESLint, Prettier, and Commitlint packages in your React project.

2. Configure ESLint
Create an ESLint configuration file (.eslintrc.json) that extends standard React and Prettier settings. Customize the rules to suit your project needs.

3. Configure Prettier
Set up a .prettierrc configuration file to define formatting rules such as quotes, semicolons, and trailing commas.

4. Initialize Husky
Enable Husky in your Git repository. This allows you to set up hooks that run before commits.

5. Configure Lint-Staged
Add Lint-Staged configuration to your package.json to run ESLint and Prettier only on staged files during pre-commit.

6. Create Git Hooks with Husky
Set up a pre-commit hook to run Lint-Staged and a commit-msg hook to validate commit messages using Commitlint.

7. Set Up Commitlint
Create a configuration file (commitlint.config.js) to enforce Conventional Commit standards like

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

🧪 How It Works
When you stage files and attempt to commit:

ESLint and Prettier will check and optionally fix issues.

Commitlint will validate the commit message format.

If any of these fail, the commit is blocked until resolved.

✍️ Commit Message Examples (Valid)

feat: Add login page

fix: Resolve crash when submitting form

chore: Update dependencies

refactor: Clean up sidebar code

❌ Invalid Messages Examples
added new feature

bug fix

update stuff

These will be rejected by Commitlint due to incorrect formatting.
