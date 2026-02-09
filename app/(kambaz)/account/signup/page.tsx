import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <Form.Control 
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2"
        defaultValue="LondonJones"
      />
      <Form.Control 
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2"
        defaultValue="4189"
      />
      <Form.Control 
        id="wd-password-verify"
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2"
      />
      <Link 
        id="wd-signup-btn"
        href="/account/profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <Link 
        id="wd-signup-link" 
        href="/account/signin"
      >
        Sign in
      </Link>
    </div>
  );
}