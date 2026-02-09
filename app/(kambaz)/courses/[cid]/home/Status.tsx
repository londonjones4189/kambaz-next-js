import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdNotifications } from "react-icons/io";
import { Button } from "react-bootstrap";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>

      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            variant="light"
            size="lg"
            className="w-100 text-nowrap text-dark"
          >
            <MdDoNotDisturbAlt className="me-2 fs-5 text-dark" />
            Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5 text-white" />
            Publish
          </Button>
        </div>
      </div>

      <br />

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <BiImport className="me-2 fs-5 text-dark" />
        Import Existing Content
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <LiaFileImportSolid className="me-2 fs-5 text-dark" />
        Import from Commons
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <IoMdHome className="me-2 fs-5 text-dark" />
        Choose Home Page
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <IoStatsChart className="me-2 fs-5 text-dark" />
        View Course Stream
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <TfiAnnouncement className="me-2 fs-5 text-dark" />
        New Announcement
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <IoStatsChart className="me-2 fs-5 text-dark" />
        New Analytics
      </Button>

      <Button
        variant="light"
        size="lg"
        className="w-100 mt-1 text-start text-dark"
      >
        <IoMdNotifications className="me-2 fs-5 text-dark" />
        View Course Notifications
      </Button>
    </div>
  );
}
