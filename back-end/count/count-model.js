const db = require('../database/dbConfig.js')

module.exports = {
    initialize,
    update,
    find
}

function find(id) {
    return db('count').where({ id }).first()
}

function initialize(count) {
    db('count').insert(count)
        .then(id => {
            return find({ id: id[0] })
        })
}

function update(count, id) {
    return db('count').where({ id }).update(count)
}