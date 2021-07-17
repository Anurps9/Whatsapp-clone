import ContactCard from '../ContactCard/ContactCard.js';
import Header from '../Header/Header';
export default function ContactScreen(props){
	return(
		<div className="ContactScreen">
			<Header name="My Contacts"/>
			<ContactCard name="Anurag" number="+91-6397211088"/>
			<ContactCard name="XYx" number="4923875934" />
		</div>
	)
}