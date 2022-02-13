import React from 'react';
import Card from './Card';


const CardList =({robots})=> {

	return(
		<div>
			{
			robots.map((user,i) =>{
				return (<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
				phone={robots[i].phone}
				city={robots[i].city}
				username={robots[i].username}
				address={robots[i].address} />
				);
			})
			}
			
			
		


		</div>

	);
}

export  default CardList;