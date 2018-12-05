const conf = require('./conf');
const leases = require('./leases');

function dnsmasq(conf){
  if(!(this instanceof dnsmasq))
    return new dnsmasq(conf);
  this.conf = conf;
  return this;
}

dnsmasq.conf = conf;
dnsmasq.leases = leases;

module.exports = dnsmasq;