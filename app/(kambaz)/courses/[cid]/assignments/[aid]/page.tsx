"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../client";
import Card from "react-bootstrap/Card";
import {
  Button, Row, Col, FormLabel, FormControl,
  FormCheck, Form, CardBody,
} from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const isNew = aid === "new";

  const [assignment, setAssignment] = useState<any>({
    course: cid,
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  const fetchAssignment = async () => {
    if (!isNew) {
      const data = await client.findAssignmentById(aid as string);
      setAssignment(data);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [aid]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setAssignment((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    if (isNew) {
      const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const updated = await client.updateAssignment(assignment);
      dispatch(updateAssignment(updated));
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <div className="mb-3">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl id="title" value={assignment.title} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <FormControl
          id="description"
          as="textarea"
          rows={8}
          className="text-danger"
          value={assignment.description}
          onChange={handleChange}
        />
      </div>
      <Form>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel>Points</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl id="points" type="number" value={assignment.points} onChange={handleChange} />
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
            <FormControl id="dueDate" type="date" value={assignment.dueDate} onChange={handleChange} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Available from</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl id="availableFrom" type="date" value={assignment.availableFrom} onChange={handleChange} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={3} className="text-end">
            <FormLabel className="fw-bold">Until</FormLabel>
          </Col>
          <Col md={9}>
            <FormControl id="availableUntil" type="date" value={assignment.availableUntil} onChange={handleChange} />
          </Col>
        </Row>
      </Form>
      <hr />
      <div className="float-end">
        <Link href={`/courses/${cid}/assignments`} className="btn btn-light me-2">
          Cancel
        </Link>
        <Button variant="danger" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
}