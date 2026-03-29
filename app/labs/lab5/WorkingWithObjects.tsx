"use client";
import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
  const [assignmentTitle, setAssignmentTitle] = useState("NodeJS Assignment");
  const [assignmentScore, setAssignmentScore] = useState(0);
  const [assignmentCompleted, setAssignmentCompleted] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Assignment</h4>
      <a className="btn btn-primary" href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a className="btn btn-primary" href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <input
        type="text"
        placeholder="New Title"
        className="form-control my-1"
        value={assignmentTitle}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />
      <a
        className="btn btn-success mb-2"
        href={`${HTTP_SERVER}/lab5/assignment/title/${encodeURIComponent(assignmentTitle)}`}
      >
        Update Title
      </a>
      <input
        type="number"
        placeholder="New Score"
        className="form-control my-1"
        value={assignmentScore}
        onChange={(e) => setAssignmentScore(Number(e.target.value))}
      />
      <a
        className="btn btn-success mb-2"
        href={`${HTTP_SERVER}/lab5/assignment/score/${assignmentScore}`}
      >
        Update Score
      </a>
      <label className="d-block">
        <input
          type="checkbox"
          checked={assignmentCompleted}
          onChange={(e) => setAssignmentCompleted(e.target.checked)}
        />
        Completed
      </label>
      <a
        className="btn btn-success mb-2"
        href={`${HTTP_SERVER}/lab5/assignment/completed/${assignmentCompleted}`}
      >
        Update Completed
      </a>
      <hr />
      <h4>Module</h4>
      <a className="btn btn-primary" href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a>
      <a className="btn btn-primary" href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <input
        type="text"
        placeholder="New Module Name"
        className="form-control my-1"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
      />
      <a
        className="btn btn-success mb-2"
        href={`${HTTP_SERVER}/lab5/module/name/${encodeURIComponent(moduleName)}`}
      >
        Update Module Name
      </a>
      <input
        type="text"
        placeholder="New Module Description"
        className="form-control my-1"
        value={moduleDescription}
        onChange={(e) => setModuleDescription(e.target.value)}
      />
      <a
        className="btn btn-success mb-2"
        href={`${HTTP_SERVER}/lab5/module/description/${encodeURIComponent(moduleDescription)}`}
      >
        Update Module Description
      </a>
    </div>
  );
}