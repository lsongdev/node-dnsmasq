const conf = require('./conf');

function dnsmasq(conf){
  if(!(this instanceof dnsmasq))
    return new dnsmasq(conf);
  this.conf = conf;
  return this;
}

dnsmasq.conf = conf;

module.exports = dnsmasq;