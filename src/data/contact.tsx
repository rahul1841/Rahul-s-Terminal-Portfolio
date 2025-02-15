
import React from 'react';

interface ContactData {
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  instagram: string;
  leetcode: string;
}

const contact: ContactData = {
  email: "rahul2004kumar14@gmail.com",
  phone: "+91-6005435690",
  linkedIn: "https://www.linkedin.com/in/rahul-kumar-716045207/",
  github: "https://github.com/rahul1841",
  instagram: "https://www.instagram.com/officialrahulsamyal/",
  leetcode: "https://leetcode.com/u/rahul2004kumar14/"
};

export const renderContact = (): JSX.Element => {
  return (
    <div>
       <br />
      <p>Email: <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.email}</a></p>
      <p>Phone: <a href={`tel:${contact.phone}`} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.phone}</a></p>
      <p>LinkedIn: <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.linkedIn}</a></p>
      <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.github}</a></p>
      <p>Instagram: <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.instagram}</a></p>
      <p>Leetcode: <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="text-custom-blue hover:text-custom-skyblue">{contact.leetcode}</a></p>
      <br />
    </div>
  );
};