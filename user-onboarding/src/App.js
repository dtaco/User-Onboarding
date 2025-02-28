// !!!!!!!!!!!!! PLEASE CHECK FOR TESTING USING cypress.io !!!!!!!!!!!!!!!

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Components/Form';
import schema from './Validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      console.log(res.data)
      setUsers([res.data, ...users])
    })
    .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form 
        values={formValues} 
        change={handleChange} 
        errors={formErrors} 
        submit={handleSubmit}
      />
    {users.map(user => (
      <div key={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
      </div>
    ))}
    </div>
    
  );
}

export default App;
