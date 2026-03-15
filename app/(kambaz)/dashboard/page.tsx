"use client";
import { useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../courses/reducer";
import { enroll, unenroll } from "../enrollmentreducer";
import { RootState } from "../store";
import {
  Row, Col, Card, CardImg, CardBody,
  CardTitle, CardText, Button, FormControl,
} from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);
  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";
  const [showAll, setShowAll] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );

  const visibleCourses = showAll
    ? courses
    : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "My Enrollments" : "Enrollments"}
        </button>
      </h1>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse({ ...course, _id: uuidv4() }))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAll ? "All Courses" : "My Courses"} ({visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((c) => {
            const enrolled = isEnrolled(c._id);
            return (
              <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <CardImg src={c.image} variant="top" width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </CardText>

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-1">
                      {enrolled ? (
                        <Link href={`/courses/${c._id}/home`} className="btn btn-primary">
                          Go
                        </Link>
                      ) : (
                        <Button variant="primary" disabled>Go</Button>
                      )}

                      {!isFaculty && (
                        enrolled ? (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              dispatch(unenroll({ userId: currentUser._id, courseId: c._id }))
                            }
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              dispatch(enroll({ userId: currentUser._id, courseId: c._id }))
                            }
                          >
                            Enroll
                          </button>
                        )
                      )}

                      {isFaculty && (
                        <div>
                          <button
                            onClick={() => dispatch(deleteCourse(c._id))}
                            className="btn btn-danger btn-sm float-end"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setCourse(c)}
                            className="btn btn-warning btn-sm me-2 float-end"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}