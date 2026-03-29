import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
 
const initialState = {
  enrollments: [] as any[],
};
 
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }) => {
      const already = state.enrollments.find(
        (e: any) => e.user === userId && e.course === courseId
      );
      if (!already) {
        state.enrollments = [
          ...state.enrollments,
          { _id: uuidv4(), user: userId, course: courseId },
        ] as any;
      }
    },
    unenroll: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});
 
export const { enroll, unenroll, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;