const router = require('express').Router()

const Count = require('./count-model.js')



// ***** endpoints start with /api/count *****


// Initialize count endpoint
router.post('/initialize', (req, res) => {
    const { counter } = req.body
    const count = {
        count: counter.count
    }

    Count.initialize(count)
        .then(count => {
            res.status(201).json(`Initialized the counter! Starting at ${count}`)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to initialize counter!' })
        })

})

// Update count endpoint
router.put('/update', (req, res) => {
    const { counter } = req.body
    const count = {
        count: counter.count
    }

    Count.update(count)
        .then(newCount => {
            res.json(newCount)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Count' })
        })
})

// Get count endpoint
router.get('/', (req, res) => {
    Count.find()
        .then(count => {
            res.json(count)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` })
        })
})