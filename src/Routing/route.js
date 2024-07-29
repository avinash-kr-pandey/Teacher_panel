import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <TPHome />
                
              // </ProtectedRoute>
            }
          >
            {/* <Route index element={<TPHome />} /> */}
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="liveclass" element={<LiveClasses />} />
            <Route path="addcourse" element={<AddCourses />} />
            <Route path="assignment" element={<Assignment />}>
              <Route path="scheduledassignments" element={<ScheduledAssignments />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="batch" element={<Batches />}>
              <Route path="courses" element={<Courses />} />
              <Route path="batches" element={<CourseBatches />} />
            </Route>
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="media" element={<CourseMedia />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
