const fs = require('fs');
const util = require('util');

function leases(str){
  return parse(str);
}

function parse(str){
  return str
    .split('\n')
    .map(parseLine)
    .filter(Boolean);
}

function parseLine(line){
  const part = line.split(/\s+/);
  const keys = 'time,mac,ip,host,id'.split(',');
  return keys.reduce((leases, key, i) => {
    leases[key] = part[i];
    return leases;
  }, {});
}

function load(filename = '/var/lib/misc/dnsmasq.leases', encoding = 'utf8'){
  const readFile = util.promisify(fs.readFile);
  return readFile(filename, encoding).then(parse);
}

leases.load = load;
leases.parse = parse;
leases.parseLine = parseLine;
module.exports = leases;