const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Get all employees
router.get('/', (req, res) => {
    Employee.getAll((err, results) => {
        if (err) res.status(500).send(err);
        else res.json(results);
    });
});

// Add a new employee
router.post('/', (req, res) => {
    Employee.create(req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(201).json({ id: results.insertId, ...req.body });
    });
});


router.delete('/:id', (req, res) => {
    Employee.delete(req.params.id, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({ message: 'Employee deleted successfully.' });
    });
});


router.put('/:id', (req, res) => {
    Employee.update(req.params.id, req.body, (err, results) => {
        if (err) res.status(500).send(err);
        else res.status(200).json({ message: 'Employee updated successfully.' });
    });
});

module.exports = router;
