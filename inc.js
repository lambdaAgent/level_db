const level = require('level');
const db = level('inc.db', { valueEncoding: 'json'});

db.get('count', (err, value) => {
    const n = (value || 0) + 1;
    db.put('count', n, err => {
        if(err) return console.error(err);
        else console.log(n);
        
    });
});