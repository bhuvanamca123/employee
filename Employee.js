const db = require('../config/db');

const Employee = {
    getAll: (callback) => {
        db.query('SELECT * FROM employees', callback);
    },
    create: (employeeData, callback) => {
        db.query('INSERT INTO employees SET ?', employeeData, callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM employees WHERE id = ?', [id], callback);
    },
    update: (id, employeeData, callback) => {
        db.query('UPDATE employees SET ? WHERE id = ?', [employeeData, id], callback);
    }
};

module.exports = Employee;
