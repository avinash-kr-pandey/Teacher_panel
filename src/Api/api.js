/** DEV */
// export const BASE_URL = 'http://localhost:8080/api';
// export const AUTH_BASE_URL = 'http://localhost:8080/auth';

import { useNavigate } from "react-router-dom";

/** PROD */
export const BASE_URL = "https://api.hopingminds.com/api";
// export const BASE_URL = 'http://localhost:3009/api';
export const AUTH_BASE_URL = "https://api.hopingminds.com/auth";

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export function formatTime(dateStr) {
  const date = new Date(dateStr);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date
    .toLocaleTimeString("en-GB", options)
    .replace(":", ".")
    .toLowerCase();
  return formattedTime;
}
export function getClassStatus(startDate, endDate) {
  const currentDate = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (currentDate < start) {
    return "Upcoming";
  } else if (currentDate > end) {
    return "Completed";
  } else {
    return "Ongoing";
  }
}
export async function AddCourseByInstructor(formData) {
  let token = localStorage.getItem("teachertoken");
  if (token) {
    try {
      const response = await fetch(BASE_URL + "/addCourseByInstructor", {
        method: "POST", // Changed to POST
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, // Send the formData
      });
      return await response.json();
    } catch (error) {
      console.log("Error adding course:", error);
      throw error;
    }
  }
}

export async function UserProfile() {
  let token = localStorage.getItem("teachertoken");
  if (token) {
    let email = jwtDecode(token)?.email;
    try {
      const response = await fetch(`${BASE_URL}/inst/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch instructor details");
      }

      const data = await response.json();
      setInstructor(data?.instructorDetails);
    } catch (error) {
      console.error("Error fetching instructor details:", error);
    } finally {
      setLoading(false);
    }
  }
}

export async function Liveclasses() {
  let token = localStorage.getItem("teachertoken");
  if (token) {
    try {
      const data = await fetch(BASE_URL + "/instructorupcominglive", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const response = await data.json();
      return response;
      // setallLiveclasses(response)
    } catch (error) {
      console.log(error);
    }
  }
}

export async function Fetchcourses() {
  let token = localStorage.getItem("teachertoken");
  if (token) {
    try {
      const data = await fetch(BASE_URL + "/instructorcourses", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const response = await data.json();
      // setAllcourses(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function FetchBatchesForCourse(courseId) {
  const token = localStorage.getItem("teachertoken");

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await fetch(`${BASE_URL}/getAllBatchesForCourse/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Handle non-OK responses (like 500)
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error ${response.status}: ${errorDetails.message || response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}


export const RemoveStudentFromBatch = async ({ userID, BatchId, courseId }) => {
  const token = localStorage.getItem("teachertoken");
  if (!token) {
    throw new Error("No token found");
  }
  const response = await fetch(`${BASE_URL}/removeUserFromBatch`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
    body: JSON.stringify({ userID, BatchId, courseId }),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }
  
  return await response.json(); // Return the response data
};



export async function addUserToBatch(userID, BatchId, courseId) {
  let token = localStorage.getItem("teachertoken");
  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await fetch(`${BASE_URL}/addUserToBatch`, {
      method: "POST", // Typically, adding uses POST
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,       // User ID to be added
        BatchId,      // Batch ID
        courseId      // Course ID
      }), 
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error("Error adding user to batch:", error);
    throw error; // Rethrow the error for further handling
  }
}






export async function Completedclass() {
  let token = localStorage.getItem("teachertoken");
  if (token) {
    try {
      const data = await fetch(BASE_URL + "/instructorcompletedlive", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const response = await data.json();
      // setAllcourses(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
