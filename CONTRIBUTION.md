# Contributing

When contributing to this repository please follow these rules and guidelines.

Please follow it in all your interactions with the project.

## Setting up Environment

Install dependencies and adding husky hooks

> Delete first the `.husky folder`

```zsh
yarn install
yarn husky install
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1 --verbose"
npx husky add .husky/pre-commit "npx lint-staged"
```

We enforce code format consistency using prettier please copy this to your vscode `settings.json` before interacting with the project.

```json
{
  "prettier.configPath": ".prettierrc.cjs",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Creating a Branch Process

1. Before creating your branch for any changes to be made `checkout` to source branch and pull the latest from the remote repository.
2. Create your branch with your desired branch name but refrain from creating branch with `feature/` characters. (see Branching Strategy section)

## Commiting Your Changes

1. Instead of using `git commit` command we will use `yarn commit` and choose appropriate answer based on your changes. (see Versioning Strategy section)
2. All commit rules should pass to commit any of your changes. We are using multiple libraries to ensure the commit message and rules are uniform and standard.
   - [Commitlint](https://commitlint.js.org/)
   - [Commitizen](https://commitizen-tools.github.io/)

## Pull Request Process

1. Ensure that changes are fully tested and ready for production release before creating a Pull Request to `master` branch.
2. Open a pull request and wait for approvers to approve your Pull Request

> Include these on your PR requests

```bash
This pull request contains:

- [x] New Feature
- [x] Component Updates
- [x] Bug Fix
- [ ] Code Refactor
- [x] Storybook Updates
- [ ] Other (about what?)

```

> NOTE: No one should be able to push on `master` branch.
> All changes in `master` branch needs to be done via Pull Request

## Branching Strategy

For our branching strategy we use auto deployment for any branch name that has `feature/` keywords. The newly deployed staging environment will track any changes on its related branch.

#### **Branch Name Prefixes**

- `bugfix/{name}` is the temporary branch to fix something
- `feature/{name}` is the temporary branch to develop a new feature (this will trigger auto deployment for staging environment)

## Versioning Strategy

We use [semantic-release](https://github.com/semantic-release) for our versioning strtegy, `semantic-release` uses the commit messages to determine the consumer impact of changes in the codebase. Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number, generates a changelog and publishes the release.

<img src="https://miro.medium.com/max/4800/0*s9t0r3aU04Mi5n3t" alt='sem-ver' />

The table below shows which commit message gets you which release type when `semantic-release` runs (using the default configuration):

| Commit message                                                                                                                               | Release type                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `fix(commit subject): some commit mmessage`                                                                                                  | ~~Patch~~ Fix Release                                                                                           |
| `feat(commit subject): some commit mmessage`                                                                                                 | ~~Minor~~ Feature Release                                                                                       |
| `perf(commit subject): some commit message`<br><br>`BREAKING CHANGE: your breaking changes subject.`<br>`Your breaking changes description.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |
