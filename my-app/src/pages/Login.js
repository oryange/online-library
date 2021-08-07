import React, { useContext, useState } from 'react';
import logo from '../images/Logo_Library.png';
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
    history.push('/home');
  }

  return (
    <main className="login-page">
      <img src={logo} alt="logo"/>
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="h4">Email address</Form.Label>
          <Form.Control
            value={ login }
            onChange={({target}) => setLogin(target.value)}
            type="email"
            size="lg"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted h3" >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="h4">Password</Form.Label>
          <Form.Control
            value={password}
            onChange={ ({target}) => setPassword(target.value)}
            type="password"
            size="lg"
            placeholder="Password"
            pattern=".{6,}"
            required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          size="lg"
        >
          Login
        </Button>
      </Form>
    </main>
  )
}

export default Login;
