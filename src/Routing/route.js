import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import TPHome from '../components/TPHome.jsx';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import LiveClasses from '../components/LiveClasses/LiveClasses.jsx';
import AddCourses from '../components/AddCourses/AddCourses.jsx';
import Batches from '../components/Batches/Batches.jsx';
import Courses from '../components/Batches/Courses.jsx';
import CourseBatches from '../components/Batches/CourseBatches.jsx';
import UserProfile from '../components/UserProfile/UserProfile.jsx';
import Assignment from '../components/Assignment/Assignment.jsx';
import ScheduledAssignments from '../components/Assignment/ScheduledAssignments/ScheduledAssignments.jsx';
import History from '../components/Assignment/History/History.jsx';
import CourseMedia from '../components/CourseMedia/CourseMedia.jsx';
import Loginpage from '../components/LoginPage/LoginPage.jsx';
import { AuthProvider } from '../components/contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import Chat from '../components/Chat/Chat.jsx';
import AddCourse from '../components/AddCourses/AddCourse56.jsx';
import BatchDetailsPage from '../components/Batches/BatchDetailsPage.jsx';

// import AddCourseDetails from '../components/AddCourses/AddCourseDetails.jsx';
// import AddingCourse from '../components/NewCourseAdd/AddingCourse.jsx';
// import AddCourse from '../components/NewCourseAdd/AddingCourse.jsx';
// import AddCourseForm from '../components/AddCourseNew/AddCourseForm.jsx';

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route
            path="/"
            element={
              <TPHome />
            }
          >
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="liveclass" element={<LiveClasses />} />
            <Route path="addcourse" element={<AddCourse />} />

            <Route path="assignment" element={<Assignment />}>
              <Route path="scheduledassignments" element={<ScheduledAssignments />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="batch" element={<Batches />}>
              {/* <Route path="courses" element={<Courses />} /> */}
              <Route path="batches" element={<CourseBatches />} />
              {/* <Route path="batchdetails" element={<BatchDetailsPage />} /> */}
              {/* <Route path="batchdetails" element={<BatchDetailsPage />} /> */}
            </Route>
            <Route path="batchdetails/:courseId" element={<BatchDetailsPage />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="media" element={<CourseMedia />} />
            <Route path="chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;



