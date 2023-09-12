import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowAllPersons = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/users?_quantity=20&_gender=male")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(users)

  const handleDelete = (id) => {
    const deletedItem = users.filter((item) => {
      return item.id !== id;
    });
    setUsers(deletedItem);
  };
  return (
    <div>
      <div className="headSection">
        <Link to="/home" className="link">
          {" "}
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
      <div>
       
        <table className="table" >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user. firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllPersons;
