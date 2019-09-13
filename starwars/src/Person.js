import React from "react";

import styled from "styled-components";



const StyledPerson = styled.div`
  text-align: center;
  table {
  background-color: rgba(0, 0, 0, 0.363);
  color: whitesmoke;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
}
th{
  font-size: 2rem;
  color: aqua;
}
  
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width:130px;
  font-size: 1.25rem;
 
}
tr:nth-child(even) {
  background-color: #413a3aa6;
}
 
`;

const Person = ({ data }) => {
  return (
    <StyledPerson>
      <table>
        <tbody>
            <tr>
            <td>{data.name}</td>
            <td>{data.gender}</td>
            <td>{data.height}</td>
            <td>{data.hair_color}</td>
            <td>{data.skin_color}</td>
            <td>{data.birth_year}</td>
            </tr>
        </tbody>
      </table>
    </StyledPerson>
  );
};

export default Person;