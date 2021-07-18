import ContactCard from '../ContactCard/ContactCard.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import React from 'react';

export default function ContactScreen(props){

	var contacts = [];
	for(let i=0; i<100; ++i){
		contacts.push(
			<ContactCard 
				imgSrc="https://picsum.photos/200"
				name="Anurag"
				number="+91-6397211088"
			/>
		)
	}

	var contactList = React.createElement("div", {className: "contactDetails"}, contacts);

	return(
		<div className="ContactScreen">
			{contactList}
		</div>
	)
}