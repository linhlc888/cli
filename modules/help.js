module.exports = async () => {
	console.log(`Usage: gok ${'command'.green} ${'subcommand'.cyan}`);
	console.log(' Commands:');
	console.log(`  ${'generate'.green}: Generate codes, alias: g`);
	console.log(`  ${'build'.green}: Build codes, alias: b`);
	console.log(`  ${'doctor'.green}: Check current environment, alias: doc`);
	console.log(`  ${'version'.green}: Print curent version`);
	console.log(`  ${'help'.green}: this help...`);
	process.exit(0);
};