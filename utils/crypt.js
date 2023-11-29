const bcrypt = require("bcryptjs");
const saltRounds = 10

const hashPassword = (password) => { 
    bcrypt
        .hash(password, saltRounds)
        .then(hash => {
            console.log('Hash: ', hash);
            return hash;
        })
        .catch(err => console.error(err.message));
}

module.exports = {
    hashPassword
}