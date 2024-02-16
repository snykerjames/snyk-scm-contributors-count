#!/usr/bin/env node

import * as yargs from 'yargs';

// Preflight checks
var node_min_ver = 14;
var node_ver_str = process.versions.node.split('.')[0];
var node_ver: number = +node_ver_str;

if (node_ver < node_min_ver) {
	console.log("Detected Node.js v" + node_ver + " -  v14 or later is required.");
	console.log("Unable to continue. Exiting.")
	process.exit(1);
}
//

yargs
  .commandDir('cmds')
  .help()
  .demandCommand()
  .argv
