"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../database";
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
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (a: any) => a.course === cid && a._id === aid
  );

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue={assignment?.title} />
      </div>
      <div className="mb-4">
        <FormControl
          as="textarea"
          rows={8}
          className="text-danger"
          defaultValue={assignment?.description}
        />
      </div>
      <Form>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="number" defaultValue={assignment?.points} />
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
                <FormLabel className="fw-bold">Online Entry Options</FormLabel>
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
            <FormControl type="date" defaultValue={assignment?.dueDate} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Available from</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="date" defaultValue={assignment?.availableFrom} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Until</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl type="date" defaultValue={assignment?.until} />
          </Col>
        </Row>
      </Form>
      <hr />
      <div className="float-end">
        <Link href={`/courses/${cid}/assignments`} className="btn btn-light me-2">
          Cancel
        </Link>
        <Link href={`/courses/${cid}/assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}