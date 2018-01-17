const level = require('level');
const db = level("test-foo.db", { valueEncoding: 'json'});

// running the same database in node and the browser
// when your data isn't veru relationals
// building your own kappa architecture



