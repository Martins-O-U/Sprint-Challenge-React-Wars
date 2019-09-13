import React from "react";

const Person = ({ data }) => {
  return (
    <div className="person">
      <table>

        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.birth_year}</td>
          <td>{data.gender}</td>
        </tr>
      </table>
    </div>
  );
};

export default Person;