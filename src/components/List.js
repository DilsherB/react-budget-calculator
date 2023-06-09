import React from 'react';
import { MdDelete } from 'react-icons/md';
import Item from './Item';

const list = ({
  list, currency, handleEdit, handleDelete, clearAll
}) => (
  <>
    {list.length > 0
      ? (
        <div>
          <table
            className="container
                table
                table-success
                table-hover
                rounded
                rounded-3
                overflow-hidden
                table-borderless
                table-striped"
          >
            <thead>
              <tr className="table-primary text-success">
                <th>Expense</th>
                <th>Amount ({currency})</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-danger" onClick={clearAll}>
            Clear All
            <MdDelete className="fs-4 ms-2 pb-1" />
          </button>
        </div>
      )
      : (
        <div className="container bg-secondary text-info fs-2 py-3 my-3">
          There is nothing to show. Please add items to see your budget
        </div>
      )}
  </>
);

export default list;
