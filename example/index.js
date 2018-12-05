const dnsmasq = require('..');


const config = dnsmasq.conf('/etc/dnsmasq/dnsmasq.conf');
const server = dnsmasq(config);

server.start();