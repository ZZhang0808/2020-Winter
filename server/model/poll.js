const db = require('../base');

const ref = db.database().ref('POLL');
class Poll {
    create(data) {
        var key = ref.push().key;
        data.key = key;
        ref.child(key).set(data);
        console.log('creating poll ' + key);
        return key;
    }

    read(key) {
        console.log('read poll ' + key);
        return ref.child(key).once('value');
    }

    readAll() {
        console.log('read all polls');
        return ref.once('value');
    }

    update(key, data) {
        ref.child(key).set(data);
        console.log('updating poll ' + key);
    }

    delete(key) {
        ref.child(key).remove();
        console.log('removing poll ' + key);
    }
}

module.exports = new Poll();