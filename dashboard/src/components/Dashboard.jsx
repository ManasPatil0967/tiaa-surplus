import { Avatar } from "@mui/material";
import React from 'react';
import "../styles/Dashboard.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase/config";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../lib/firebase/auth";
import SideNavBar from "./SideNavBar";


const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data());
            } 
        });
    }, []);

  return (
    <>
       <div style={{ display: "flex", height: "100vh" }}>
      <SideNavBar />
        <div>
          <h1 style={{color:"white", marginLeft: "20px",marginTop: "20px"}}>Welcome {userData.Name}!</h1>
          <div className="payer">
            <div className="ret">
               <h6>Retirement Account</h6>
              <h7>Current Balance</h7>
              <h4 className="line">{userData.Income}</h4>
              <h6>User Name</h6>
              <h7>{userData.Name}</h7>
              <h6>User Age</h6>
              <h7>{userData.Age}</h7>
            </div>
            <div className="ben" >
              <h4 style={{marginLeft:"20px"}}>Saved Beneficiaries</h4>
              <button style={{marginLeft:"20px"}}>Add New</button>
              <Avatar style={{marginLeft:"20px", marginTop:"5px"}}>A</Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
