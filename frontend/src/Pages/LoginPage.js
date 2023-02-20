import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Context from '../Context/Context';

function LoginPage() {
  const {user} = useContext(Context)
  return (
    <div>
     <Form>
      {user && <h1>{user.username}</h1>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Link to="/HomePage">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default LoginPage;