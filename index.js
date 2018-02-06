#!/usr/bin/env node
const minimist = require('minimist');
const doctor = require('./modules/doctor');

const argv = minimist(process.argv.slice(2));
const modules = { doctor };

if (!argv._[0]) {
	console.log('Usage: gok command');
	console.log('  command list:');
	console.log('  doctor: check');
	process.exit(0);
}

const tools = require('./tools');

const start = async () => {
	if (typeof modules[argv._[0]] === 'function') {
		await modules[argv._[0]](argv, tools);
	}
};

start().catch((err) => {
	console.log(`Error: ${err}`);
});
