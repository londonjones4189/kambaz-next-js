"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Modules from "../modules/page";
import CourseStatus from "./Status";

export default function Home() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );

  useEffect(() => {
    if (!isEnrolled) {
      router.replace("/Kambaz/Dashboard");
    }
  }, [isEnrolled, router]);

  if (!isEnrolled) return null;

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