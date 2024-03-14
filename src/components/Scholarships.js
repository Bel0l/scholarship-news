import React, { useState } from 'react';
import scholar from './scholar.jpg'; // Assuming this is a generic image for all scholarships
import flower from './flower.jpg';

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([
    { id: 1, name: 'Science Talent Scholarship', amount: '$3000', deadline: '2024-01-15', 
    description: 
    <span>
          ​​​​​​​​Under Learning Opportunities Abroad, Higher Education Commission Pakistan is offering foreign funded scholarships to potential Pakistani/AJK nationals received through diplomatic channel. HEC accepts valid test score of HAT for Masters & PhD programs and USAT for Bachelors programs from potential applicants for foreign funded scholarship programs. Perspective applicants of foreign funded scholarship programs including Hungarian Scholarship Program, Commonwealth Scholarship Program and Chinese Government Scholarship Program etc are advised to obtain valid HAT and USAT test score before applying on Learning Opportunities Abroad (LOA)s portal. Perspective applicants are further advised to visit <a href="https://etc.hec.gov.pk/#/login" target="_blank" rel="noopener noreferrer">https://etc.hec.gov.pk/#/login</a> for the latest information on HAT and USAT test.
        </span>,
    updated: '2024-01-01' },
    { id: 2, name: 'Engineering Excellence Grant', amount: '$2500', deadline: '2024-02-20', description: 'Awarded to engineering students who have shown remarkable achievements.', updated: '2024-02-01' },
    { id: 3, name: 'Arts Merit Scholarship', amount: '$2000', deadline: '2024-03-30', description: 'Supports talented individuals in the arts, fostering creativity and innovation.', updated: '2024-03-01' },
  ]);

  return (
    <div className="container mt-5">
      <img className='w-100' src={flower} alt="" />
      <h2 className="mb-4 mt-5">Top 20 Scholarships Available</h2>
      {scholarships.map((scholarship) => (
        <div key={scholarship.id} className="card mb-3" style={{ maxWidth: '1080px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={scholar} className="img-fluid rounded-start" alt={scholarship.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title fw-bold text-success">{scholarship.name}</h4>
                <p className="card-text ">{scholarship.description}</p>
                <p className="card-text ">Amount: {scholarship.amount}</p>
                <p className="card-text ">Deadline: {scholarship.deadline}</p>
                <p className="card-text "><small className="text-warning">Last updated {scholarship.updated}</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scholarships;
