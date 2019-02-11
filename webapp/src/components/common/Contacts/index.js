import React from 'react';
import { tableStyle } from './contacts.module.css';

/* eslint-disable react/prop-types */
const Contacts = ({ list, handleRemove }) => (
  <table className={tableStyle}>
    <tbody>
      {list.map((item, index) => (
        <tr key={index}>
          <th>{item.name}</th>
          <th onClick={() => handleRemove(item._id)}>X</th>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Contacts;
