import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form} from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control 
        defaultValue="alice" 
        placeholder="username" 
        className="wd-username mb-2"
      />
      <Form.Control 
        defaultValue="123" 
        placeholder="password" 
        type="text"
        className="wd-password mb-2"
      />
      <Form.Control 
        defaultValue="Alice" 
        placeholder="First Name" 
        id="wd-firstname"
        className="mb-2"
      />
      <Form.Control 
        defaultValue="Wonderland" 
        placeholder="Last Name" 
        id="wd-lastname"
        className="mb-2"
      />
      <Form.Control 
        defaultValue ="2005-04-05"
        type="date" 
        id="wd-dob"
        className="mb-2"
      />
      <Form.Control 
        defaultValue="alice@wonderland" 
        type="email" 
        id="wd-email"
        className="mb-2"
      />
      <Form.Select 
        defaultValue="USER" 
        id="wd-role"
        className="mb-2"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link 
        href="/account/signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}
