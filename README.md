## dnsmasq [![dnsmasq](https://img.shields.io/npm/v/dnsmasq.svg)](https://npmjs.org/dnsmasq)

> simple wrapper for dnsmasq in javascript

### Installation

```bash
$ npm install dnsmasq
```

### Example

```js
const dnsmasq = require('dnsmasq');

const config = dnsmasq.conf('/etc/dnsmasq/dnsmasq.conf');
const server = dnsmasq(config);
// const server = dnsmasq({
//   'port': '5353',
//   'interface': 'br0',
//   'log-dhcp': true,
//   'log-queries': true,
//   'log-facility': '/var/log/dnsmasq.log'
// });

server.start(() => {
  console.log('dnsmasq is started');
});

const fs = require('fs');
const leases = require('dnsmasq/leases');

fs.readFile('/var/lib/misc/dnsmasq.leases', 'utf8', (err, content) => {
  console.log(leases(content));
  //
  //  { time: '1544024965',
  //     mac: '00:0c:29:84:83:cb',
  //     ip: '192.168.88.100',
  //     host: 'media',
  //     id: '*' }
});

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---