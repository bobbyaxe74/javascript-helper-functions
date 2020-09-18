# Contributing To Javascript Helper Functions (JHF)

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Javascript Helper Functions and its packages, which are hosted in the [Javascript Helper Functions Project](https://github.com/bobbyaxe61/javascript-helper-functions) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [JHF and Packages](#jhf-and-packages)
  * [JHF Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Style Guides](#style-guides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Style Guide](#javascript-style-guide)
  * [Documentation Style Guide](#documentation-style-guide)

[Attribution](#attribution)


## Code of Conduct

This project and everyone participating in it is governed by the [JHF Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [bobbyaxe61@gmail.com](mailto:bobbyaxe61@gmail.com).


## What should I know before I get started?

### JHF and Packages

JHF is a small open source project &mdash; it's made up of two major scripts. When you initially consider contributing to JHF, you might be unsure about which of those scripts that implements the functionality you want to change or report a bug for. This section should help you with that.

JHF is intentionally divided in two two parts which are the client and server. client for functions/methods which use the javascript engine and web api (available on browsers and may differ based on browser type and version) and the server for functions/methods which use the javascript engine and its available apis.

JHF make's use of a few packages to achieve it's goal of minimal functionality wrapper. wrapping a few package apis when absolutely necessary to achieve a simpler, more eloquent functionality.

Here's a list of some currently use packages:

* [form-data](https://github.com/form-data/form-data) - A library to create readable "multipart/form-data" streams. Can be used to submit forms and file uploads to other web applications.

* [dotenv](https://github.com/motdotla/dotenv) - A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will be in [the documentation](#). If you have a question around how we do things, check to see if it is documented once the documentation is available. If it is *not* documented there, please contact us at [bobbyaxe61@gmail.com](mailto:bobbyaxe61@gmail.com) and ask your questions.


## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for JHF. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [the documentation](#) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible. begin very detailed helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for JHF, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [The documentation](#) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please include as many details as possible including the steps that you imagine you would take if the feature you're requesting existed.

### Your First Code Contribution

Unsure where to begin contributing to JHF? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

The process described here has several goals:

- Maintain JHF's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible JHF
- Enable a sustainable system for JHF's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [Style Guides](#style-guides)
3. After you submit your pull request, and your changes involve modification of existing functions or addition of newer functions ensure that a minimum of two test case are written for the function one to assert success and the other to assert failure.

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional tests, or other changes before your pull request can be ultimately accepted.

## Style Guides

### Git Commit Messages

* Use the past tense ("Added feature" not "Add feature")
* Prefer first letter of each word to be uppercase for commit title
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Style Guide

All JavaScript code is linted with [Prettier](https://prettier.io/) and [Code Spell Checker](https://github.com/streetsidesoftware/vscode-spell-checker).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Es6 syntax or higher except when not possible or applicable.
* Clear functions/methods definitions and comments.
* No duplication of existing functions logic, instead use the function directly.

### Documentation Style Guide

* Use [Code Spell Checker](https://github.com/streetsidesoftware/vscode-spell-checker).
* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

## Attribution

* Credits to [Atom Text Editor](https://github.com/atom/atom) for contribution template, code of conduct template and others.