import { useState } from "react";


interface Props{
  items: string[];
  heading: string;

  // creating a props function
  onSelectedtem:(item:string) => void;
}

function ListGroup({items,heading, onSelectedtem }: Props) {
  

  
 const [selectedIndex, setSelectedIndex] =  useState(-1);
 
   
  return (
    <>
      <h1>{heading} </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex=== index ? 'list-group-item active': 'list-group-item '}
            key={item}
            onClick={() => {
              setSelectedIndex (index);
              onSelectedtem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
