const db = require('../base');

const ref = db.database().ref('USER');
class User {
    create(key, data) {
        data.key = key;
        ref.child(key).set(data).catch((error) => {
            console.log(error);
        });
        console.log('creating user ' + key);
        return key;
    }

    read(key) {
        return ref.child(key).once('value').then((user) => user.val())
            .catch(error => console.log(error));
    }

    readAll() {
        return ref.once('value').then((user) => {
                console.log('read all users');
                return user;
            })
            .catch(error => console.log(error));
    }

    update(key, data) {
        ref.child(key).set(data);
        console.log('updating user ' + key);
    }

    delete(key) {
        ref.child(key).remove();
        console.log('removing user ' + key);
    }
}

module.exports = new User();