const fs = require('fs');

const writeFile = () => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Your Software Team has been Created!'
            })
        })
    })
}

module.exports = {writeFile}