// Export a statrless functional component
// description, amount, creadtAt


import React from 'react';
import {Link, NavLink} from 'react-router-dom';


export  const ExpenseListItem = ({id,description, note, amount, createdAt}) => {
   return  (<div>
                <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
                <p>{amount} - {createdAt}</p>
                
            </div>)

}


export default ExpenseListItem;