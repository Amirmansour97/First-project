import React from 'react';

const Card = ({name,email,id,phone,username,address})=>{
	return(

		<div className = 'tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'> 
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{username}</h2>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{address.city}</p>
				<p>{address.zipcode}</p>


			</div>


		</div>

		);
}

export default Card;