import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const Item = ({item}) => {
    const {id, name, amount} = item
  return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td><MdEdit  className='text-success'/></td>
            <td><MdDelete  className='text-danger'/></td>
        </tr>
  )
}

export default Item
