"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CourseNavigation({ courseId }: { courseId: string }) {
  const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          href={`/courses/${courseId}/${link === "People" ? "people/Table" : link.toLowerCase()}`}
          className={`list-group-item border-0 ${
            pathname.includes(link.toLowerCase()) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
