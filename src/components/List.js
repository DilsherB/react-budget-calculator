import React from 'react';
import Item from './Item';

const list = ({list}) => {
  return (
    <>
      <table className='table table-stripped'>
        {list.map(item=>{return <Item key={item.id} item={item}/>})}
      </table>
      {list.length>0 && <button className='btn btn-danger'>Clear All</button>}
    </>
  )
}

export default list
