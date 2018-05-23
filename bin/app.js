#! /usr/bin/env node

const qrcode = require('qrcode-terminal');
const meow = require('meow');

const cli = meow(`
  Modo de uso:
    $ sqrc <text>
  Exemplo:
    $ sqrc It is awesome!
`, {});

const text = cli.input.join(' ');

if (!text) {
  console.log('\n\tNo text was entered. :(\n')
  process.exit(1);
}

qrcode.generate(text);