const fs = require('fs');
const leases = require('../leases');

fs.readFile('/var/lib/misc/dnsmasq.leases', 'utf8', (err, content) => {
  console.log(leases(content));
});