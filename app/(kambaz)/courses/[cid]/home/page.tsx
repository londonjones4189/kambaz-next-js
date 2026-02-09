import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home">
      <div className="d-flex">
        <div className="flex-fill">
          <Modules />
        </div>
        <div className="d-none d-xl-block" style={{ width: "300px" }}>
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}