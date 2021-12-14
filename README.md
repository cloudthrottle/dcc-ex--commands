# DCC++ EX Command Library

A Javascript library to help create DCC++ EX Command strings.

A developer friendly approach to creating command strings 
that can be sent to a [DCC++EX Command Station](https://github.com/DCC-EX/CommandStation-EX)

## Usage/Examples

### Quick Start

```html
<script type="module">
    import * as DCCCommands from 'https://cdn.skypack.dev/@cloudthrottle/dcc-ex--commands';

    console.log(DCCCommands.powerCommand({power: 1, track: "MAIN"}));
    // <1 MAIN>
</script>
```

### NPM Package

Install with npm

```bash
  npm install @cloudthrottle/dcc-ex--commands
```

```javascript
import {throttleCommand} from "@cloudthrottle/dcc-ex--commands";

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


## Documentation

- [Documentation](https://github.com/cloudthrottle/dcc-ex--commands/wiki)
- [Available Commands](https://github.com/cloudthrottle/dcc-ex--commands/wiki/Commands)

## Developing

Clone the project

```bash
  git clone https://github.com/cloudthrottle/dcc-ex--commands.git
```

Go to the project directory

```bash
  cd dcc-ex--commands
```

Install environment. This project requires Node v16.8 or above. If node is already installed this step can be skipped.
[`asdf`](https://github.com/asdf-vm/asdf) is recommended due to it's simplicity

```bash
  asdf install
```

Install dependencies

```bash
  npm install
```

Run the test suite

```bash
  npm test
```

## Related

Here are some related projects

- [DCC EX](https://github.com/DCC-EX)
- [DCC EX Command Reference](https://dcc-ex.com/reference/software/command-reference.html)
- [WebThrottle-EX](https://github.com/DCC-EX/WebThrottle-EX)

