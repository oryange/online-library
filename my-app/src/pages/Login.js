import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { sucessLogin } = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    sucessLogin(login, password);
    history.push('/');
  }

  return (
    <main>
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={ login }
            onChange={({target}) => setLogin(target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={ ({target}) => setPassword(target.value)}
            type="password"
            placeholder="Password"
            pattern=".{6,}"
            required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </main>
  )
}

export default Login;
