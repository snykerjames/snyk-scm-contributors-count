#!/usr/bin/env node

import * as yargs from 'yargs';

var node_ver_str = process.versions.node.split('.')[0];
var node_ver: number = +node_ver_str;

if (node_ver < 14) {
	console.log("Detected Node.js v" + node_ver + " -  v14 or later is required.");
	process.exit(1);
}

yargs
  .commandDir('cmds')
  .help()
  .demandCommand()
  .argv
