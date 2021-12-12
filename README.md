
# DCC++ EX Command Library

A Javascript library to help create DCC++ EX Command strings.


## Usage/Examples
### Quick Start

```javascript
import {throttleCommand} from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands'

const commandString = throttleCommand({
    cab: 22, 
    speed: 126,
    direction: 1
    })

console.log(commandString)
// <t 1 22 126 1>
```

## Demo

[Try out some commands](https://commands.webthrottle.cloud/)

