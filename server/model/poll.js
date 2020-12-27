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
        return ref.child(key).once('value').then((data) => {
            console.log('read poll ' + key);
            return data;})
    }

    readAll() {
        return ref.once('value').then((data) => {
                console.log('read all polls');
                return data;
            })
            .catch(error => console.log(error));
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