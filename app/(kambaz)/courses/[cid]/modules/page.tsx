"use client";

import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./modulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      {/* TOP MODULE CONTROLS */}
      <ModulesControls />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        {/* ========== WEEK 1 ========== */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 1</span>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 2</span>
              <LessonControlButtons />
            </li>
          </ul>
        </li>

        {/* ========== WEEK 2 ========== */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 1</span>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1 border-0 border-start border-success border-3">
              <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 2</span>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
