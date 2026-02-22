import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../database";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({ children, params }: { children: React.ReactNode; params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "200px" }}>
          <CourseNavigation courseId={(await params).cid} />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}