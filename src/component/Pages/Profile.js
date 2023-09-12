import React, { useState, useEffect } from "react";
import "./Style.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01"
      )
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);
  return (
    <>
      <div className="headSection">
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/companies" className="link">
          Companies
        </Link>
        <Link to="/showAllPersons" className="link">
          Show All Persons
        </Link>
        <Link to="/profile" className="link">
          Profile
        </Link>
      </div>
      <div className="profile1">
        {profileData.map((item) => {
          console.log(item, "item");

          return (
            <>
              <h2>Name:{item.firstname}</h2>
              <h2>Lastname:{item.lastname}</h2>
              <h2 className="prof">Email:{item.email}</h2>
              <h2>Phone:{item.phone}</h2>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
