var configurationFile = 'fs_config.json';
var fs = require('fs');

var configurationFile = JSON.parse(
	fs.readFileSync(configurationFile));

console.log(configurationFile.providers[4].Provider);
console.log(configurationFile.providers[4].gradle);
console.log(configurationFile.providers[4].reqjars);