
function leases(str){
  return parse(str);
}

function parse(str){
  return str.split('\n').map(parseLine).filter(Boolean);
}

function parseLine(line){
  const part = line.split(/\s+/);
  const keys = 'time,mac,ip,host,id'.split(',');
  return keys.reduce((leases, key, i) => {
    leases[key] = part[i];
    return leases;
  }, {});
}

module.exports = leases;