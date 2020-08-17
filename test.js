let data = require('./data/company-data.json');
let newData = data.map(el => {
    const name = el.title;
    const email = name.toLowerCase().split(' ').join('') + '@gmail.com';
    return {
        ...el,
        contact: email
    }
})
const fs = require('fs');

newData = JSON.stringify(newData);
fs.writeFileSync('jobs-dataa.json',newData);