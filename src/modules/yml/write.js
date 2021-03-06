const path = require('path');
const ojp = require('object-path');
const { parseKey } = require('./key');

module.exports = async (argv, tools) => {
	if (!argv.i) throw new Error('Require io file, ex: gok yaml w -i input.yaml -o output.yaml key value');
	const outf = argv.o || argv.i;
	const fname = path.resolve(argv.i);
	let yml = null;
	try {
		yml = tools.readYaml(fname);
	} catch (e) {
		throw new Error(`${argv.i} does not exist or not a valid yaml file.`);
	}
	for (let i = 2; i < argv._.length; i += 2) {
		if (argv._[i] && argv._[i + 1]) {
			const keys = parseKey(argv._[i]);
			if (keys[keys.length - 1] === '+') {
				keys.pop();
				ojp.push(yml, keys, argv._[i + 1]);
				continue;
			}
			ojp.set(yml, keys, argv._[i + 1]);
		}
	}
	const ofname = path.resolve(outf);
	tools.writeYaml(ofname, yml);
};
