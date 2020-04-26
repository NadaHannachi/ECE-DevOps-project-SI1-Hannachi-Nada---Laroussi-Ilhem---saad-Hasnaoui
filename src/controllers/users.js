const path = require('path')
const fs = require('fs')
const os = require('os')

configure = require('../configure')
conig = configure()


module.exports = {
  create: (user, callback) => {
    if (!user.username) return callback(new Error('Wrong user parameter'), null)

    // TODO check if user already exists
    strUser = `${user.username}:${user.firstname}:${user.lastname}${os.EOL}`
    fs.appendFile(path.join(conig.users.db_dir, 'users'), strUser, (err) => {
      if (err) throw err
      callback(null, user.username)
    })
  },
  get: (username, callback) => {
    // TODO create this method
    console.log(username);
    // 1. Read the file
    fs.readFile(path.join(conig.users.db_dir, 'users'), (err, data) => {
      let users = data.toString();
      let allusers = users.split("\n");
      // 2. Check every line in the loop ("for")
      for (user of allusers) {
        let myUser= user.split(":")
        if (myUser[0] === username) {
          // 3. Return an onject with user information, or null
        }
      }
      if (err) throw err
    })
  }
}
exports.Lookfor=this.Lookfor;