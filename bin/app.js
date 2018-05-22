#! /usr/bin/env node

const qrcode = require('qrcode-terminal');
const meow = require('meow');

const cli = meow(`
  Modo de uso:
    $ sqrc <texto>
  Exemplo:
    $ sqrc It is awesome!
`, {});

const text = cli.input.join(' ');

if (!text) {
  console.log('\n\tNenhum texto foi informado. :(\n')
  process.exit(1);
}

qrcode.generate(text);