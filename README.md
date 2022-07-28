# javascript-helper-functions

A collection of small helpful javascript functions. [See Documentation](./documentation/documentation.md)

## Sections

- [Installation](#Installation)
- [Usage](#Usage)
- [Documentation](./documentation/documentation.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Code Of Conduct](./CODE_OF_CONDUCT.md)
- [Pull Request Guide Templates](./PULL_REQUEST_TEMPLATE.md)
- [Bug Report Pull Request Template](./documentation/pull_request_templates/bug_report.md)
- [Changing Functionality Pull Request Template](./documentation/pull_request_templates/changing_functionality.md)
- [Documentation Improvement Pull Request Template](./documentation/pull_request_templates/documentation_improvement.md)
- [Performance Improvement Pull Request Template](./documentation/pull_request_templates/performance_improvement.md)
- [License](./LICENSE)

## Installation
```
npm install jhf
```

## Usage

> For client side applications (React.js, React Native, Vue.js) use
```
import { isArray } from "jhf/client-helper";

isArray({}) // false
```

```
import * as JHF from "jhf/client-helper";

JHF.isArray({}) // false
```

> For server side applications (Node.js, Deno) use
```
import { isArray } from "jhf/server-helper";

isArray({}) // false
```

```
import * as JHF from "jhf/server-helper";

JHF.isArray({}) // false
```

## More
For more methods please [see documentation](./documentation/documentation.md)