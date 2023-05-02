import React from 'react';
import Item from './Item';
import {MdDelete} from 'react-icons/md'

const list = ({list}) => {
  return (
    <>
    {list.length>0 ?
    <div>
        <table 
        class="container 
                table 
                table-success 
                table-hover 
                rounded 
                rounded-3 
                overflow-hidden
                table-borderless
                table-striped">
                    <thead>
                        <tr className='table-primary text-success'>
                            <th>Expense</th>
                            <th>Amount (PKR)</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
            <tbody>
                {list.map(item=>{return <Item key={item.id} item={item}/>})}
            </tbody>
        </table>
      <button className='btn btn-danger'>
        Clear All
        <MdDelete className='btn-icon'/>
      </button>
      </div>
      : <div className='container bg-secondary text-info fs-2 py-3 my-3'>
            There is nothing to show. Please add items to see your budget
        </div>}
    </>
  )
}

export default list
