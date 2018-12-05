const leases = require('../leases');


(async () => {
  const results = await leases.load();
  console.log(results);
})();