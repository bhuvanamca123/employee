import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        position: '',
        salary: '',
        date_of_joining: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, []);
    


    const fetchEmployees = async () => {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/employees', formData);
        fetchEmployees();
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            position: '',
            salary: '',
            date_of_joining: ''
        });
    };


    

    return (
        <div className="App">
            <h1>Employee Management System</h1>

            <form onSubmit={handleFormSubmit}>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder="First Name" required />
                <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder="Last Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="Position" required />
                <input type="number" name="salary" value={formData.salary} onChange={handleInputChange} placeholder="Salary" required />
                <input type="date" name="date_of_joining" value={formData.date_of_joining} onChange={handleInputChange} required />
                <button type="submit">Add Employee</button>
            </form>

            <h2>New Joining Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.first_name} {employee.last_name} - {employee.position} (${employee.salary})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
