/** DEV */
// export const BASE_URL = 'http://localhost:8080/api';
// export const AUTH_BASE_URL = 'http://localhost:8080/auth';

import { useNavigate } from "react-router-dom";


/** PROD */
export const BASE_URL = 'https://api.hopingminds.com/api';
// export const BASE_URL = 'http://localhost:3009/api';
export const AUTH_BASE_URL = 'https://api.hopingminds.com/auth';

export function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return formattedDate;
}

export function formatTime(dateStr) {
    const date = new Date(dateStr);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-GB', options).replace(':', '.').toLowerCase();
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
export async function Liveclasses(){
    let token=localStorage.getItem('teachertoken')
    if(token){
      try {
        const data=await fetch(BASE_URL+'/instructorupcominglive',{
          method:'GET',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json'
          }
        })
        const response=await data.json()
        return response;
        // setallLiveclasses(response)
      } catch (error) {
        console.log(error);
      }
    }
  }
 export async function Fetchcourses(){
    let token=localStorage.getItem('teachertoken')
    if(token){
      try {
        const data=await fetch(BASE_URL+'/instructorcourses',{
          method:'GET',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json'
          }
        })
        const response=await data.json()
        // setAllcourses(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    
  }
 export async function Completedclass(){
    let token=localStorage.getItem('teachertoken')
    if(token){
      try {
        const data=await fetch(BASE_URL+'/instructorcompletedlive',{
          method:'GET',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json'
          }
        })
        const response=await data.json()
        // setAllcourses(response)
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    
  }

