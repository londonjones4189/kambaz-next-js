"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCaretDown, FaCheckCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import * as db from "../../../database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" className="p-3">
      <div className="mb-3">
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">
            <BiSearch />
          </span>
          <input
            placeholder="Search..."
            id="wd-search-assignment"
            className="form-control border-start-0"
          />
        </div>
        <div className="float-end">
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
            <BsPlus className="fs-5" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <BsPlus className="fs-5" /> Assignment
          </button>
        </div>
        <div className="clearfix"></div>
      </div>

      <ul id="wd-assignment-list" className="list-group">
        <li className="list-group-item p-0 mb-3 border">
          <div className="p-3 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2" />
              <FaCaretDown className="me-2" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div>
              <span className="border border-dark rounded-pill px-3 py-1 me-2">
                40% of Total
              </span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical />
            </div>
          </div>

          <ul className="list-group list-group-flush">
            {assignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-3 ps-0 d-flex"
              >
                <div className="bg-success" style={{ width: "5px" }}></div>
                <div className="d-flex align-items-start flex-grow-1 ps-3">
                  <BsGripVertical className="me-2 mt-1" />
                  <HiOutlineDocumentText className="me-3 mt-1 fs-4 text-success" />
                  <div className="flex-grow-1">
                    <Link
                      href={`/courses/${cid}/assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-danger small">
                      {assignment.modules || "Multiple Modules"}
                    </div>
                    <div className="small text-muted">
                      <strong>Not available until</strong> {assignment.availableFrom} |
                    </div>
                    <div className="small text-muted">
                      <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}