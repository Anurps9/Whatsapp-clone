import ContactCard from '../ContactCard/ContactCard.js';
import React from 'react';
import './ContactScreen.css';

export default function ContactScreen(props){

	var contacts = [];
	for(let i=0; i<100; ++i){
		contacts.push(
			<ContactCard handleClick={props.handleOtherUserClick}
				imgSrc="https://picsum.photos/200"
				name="Anurag"
				number="+91-6397211088"
				handleClick={props.handleContactClick}
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