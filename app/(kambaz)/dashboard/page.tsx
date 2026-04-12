"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer";
import { setEnrollments } from "../enrollmentreducer";
import { RootState } from "../store";
import * as client from "../courses/client";
import * as enrollmentsClient from "../courses/client";
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

  const fetchCourses = async () => {
    try {
      const data = showAll
        ? await client.fetchAllCourses()
        : await client.findMyCourses();
      dispatch(setCourses(data));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const data = await enrollmentsClient.findAllEnrollments();
      dispatch(setEnrollments(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser, showAll]);

  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );

  const onAddNewCourse = async () => {
    try {
      await client.createCourse(course);
      const updatedCourses = await client.findMyCourses();
      dispatch(setCourses(updatedCourses));
      const data = await enrollmentsClient.findAllEnrollments();
      dispatch(setEnrollments(data));
    } catch (error: any) {
      console.error("Error adding course:", error.response?.status, error.response?.data);
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => (c._id === course._id ? course : c))));
  };

  const onEnroll = async (courseId: string) => {
  const enrollment = await enrollmentsClient.enrollIntoCourse(currentUser._id, courseId);
  dispatch(setEnrollments([...enrollments, enrollment]));
};

const onUnenroll = async (courseId: string) => {
  await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
  dispatch(setEnrollments(
    enrollments.filter((e: any) => !(e.user === currentUser._id && e.course === courseId))
  ));
};

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
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
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
        {showAll ? "All Courses" : "My Courses"} ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c) => {
            const enrolled = isEnrolled(c._id);
            return (
              <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <CardImg src={"/images/reactjs.jpg"} variant="top" width="100%" height={160} />
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
                            onClick={() => onUnenroll(c._id)}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => onEnroll(c._id)}
                          >
                            Enroll
                          </button>
                        )
                      )}

                      {isFaculty && (
                        <div>
                          <button
                            className="btn btn-danger btn-sm float-end"
                            onClick={(e) => {
                              e.preventDefault();
                              onDeleteCourse(c._id);
                            }}
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