const fs = require('fs');
const leases = require('../leases');

fs.readFile('/Users/Lsong/Desktop/dnsmasq.leases', 'utf8', (err, content) => {
  console.log(leases(content));
});