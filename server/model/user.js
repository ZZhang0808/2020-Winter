const db = require('../base');

const ref = db.database().ref('USER');
class User {
    create(data) {
        return db.auth().createUserWithEmailAndPassword(data.email, data.password).then(() => {
            console.log('sign up ' + db.auth().currentUser.uid);
            data.key = db.auth().currentUser.uid;
            ref.child(data.key).set(data).catch((error) => {
                console.log(error);
            });
            console.log('creating user ' + data.key);
            return data.key;
        });
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