const db = require('../database/dbConfig.js')

module.exports = {
    initialize,
    update,
    find
}

function find(id) {
    if (id) {
        console.log('find', id)
        return db('count').where({ id }).first()
    }else {
        console.log('SHIT! No ID')
        return {errorMessage: 'ID not found!'}
    }
}

function initialize(count) {
    console.log('initialize', count.count)
    if (count.count !== null) {
        return db('count').insert(count)
            .then(id => {
                console.log('id', id)
                return find(id[0])
            })
    }else {
        console.log('initialize error')
        return {errorMessage: 'No count given!!!'}
    }
}

function update(count, id) {
    return db('count').where({ id: id }).update(count)
        .then(ids => {
            console.log('id in update', id)
            return find(id)
        })
}