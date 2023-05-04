import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Item = ({
  item, handleEdit, handleDelete
}) => {
  const { id, name, amount } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{amount}</td>
      <td><MdEdit className="text-success cursor-pointer" id={id} onClick={() => handleEdit(id)} /></td>
      <td><MdDelete className="text-danger cursor-pointer" id={id} onClick={() => handleDelete(id)} /></td>
    </tr>
  );
};

export default Item;
