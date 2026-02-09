import Card from "react-bootstrap/Card";
import {
  Button,
  Row,
  Col,
  FormLabel,
  FormControl,
  FormCheck,
  Form,
  CardBody
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue="A1" />
      </div>
      
      <div className="mb-4">
        <FormControl
          as="textarea"
          rows={8}
          className="text-danger"
          defaultValue={`The assignment is available online
Submit a link to the landing page of your Web application running on
Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page`}
        />
      </div>
      
      <Form>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="number" defaultValue={100} />
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Assignment Group</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </Form.Select>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Display Grade as</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </Form.Select>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Submission Type</FormLabel>
          </Col>
          <Col md={9}>
            <Form.Select defaultValue="Online" className="mb-3">
              <option value="Online">Online</option>
              <option value="Paper">Paper</option>
            </Form.Select>
            <Card>
              <CardBody>
                <FormLabel className="fw-bold">
                  Online Entry Options
                </FormLabel>
                <FormCheck label="Text Entry" />
                <FormCheck label="Website URL" />
                <FormCheck label="Media Recordings" />
                <FormCheck label="Student Annotation" />
                <FormCheck label="File Uploads" />
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Assign</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl defaultValue="Everyone" />
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Due</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="date" defaultValue="2024-05-13" />
          </Col>
        </Row>
        
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Available from</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="date" defaultValue="2024-05-06" />
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Until</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="date" defaultValue="2024-05-20" />
          </Col>
        </Row>
      </Form>
      
      <hr />
      <div className="float-end">
        <Button
          className="me-2"
          variant="light"
        >
          Cancel
        </Button>
        <Button variant="danger">
          Save
        </Button>
      </div>
    </div>
  );
}