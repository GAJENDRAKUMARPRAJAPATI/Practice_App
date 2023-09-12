
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

function CompaniesList() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const quantity = queryParams.get("_quantity") || 20;

    axios
      .get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`)
      .then((response) => {
        setCompanies(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching companies:", error);
      });
  }, []);
  

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

 

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <div className="headSection">
       <Link to="/home" className="link"> Home</Link>
          <Link  to="/companies" className="link">Companies</Link>
          <Link to="/showAllPersons" className="link">Show All Persons</Link>
          <Link to="/profile" className="link">Profile</Link>
    </div>
      <h1>Company List</h1>
      <ul>
        {companies.map((company) => {
            return(
                <li key={company.id} onClick={() => handleCompanyClick(company)}>
                <img src={company.image} alt="pic" />
                {company.name}
              </li>
            )
        })}
      </ul>

      {selectedCompany && (
        <Modal
          title="Company Details"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h2>Company Name: {selectedCompany.name}</h2>
          <h3>Email : {selectedCompany.email}</h3>
          <h3>Website : {selectedCompany.website}</h3>
        </Modal>
      )}
    </div>
  );
}

export default CompaniesList;
