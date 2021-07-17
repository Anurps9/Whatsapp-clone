import './UserDescriptionScreen.css';
import ProfilePictureExpanded from '../ProfilePictureExpanded/ProfilePictureExpanded.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import UserDescriptionCard from '../UserDescriptionCard/UserDescriptionCard.js';

export default function UserDescriptionScreen(props){
	return (
		<div className="UserDescriptionScreen">
			<div className="headerContainer">
				<Header />
			</div>
			<div className="ProfilePictureContainer">
				<ProfilePictureExpanded src="https://picsum.photos/200" />
			</div>
			<div className="UserDescriptionCardContainer">
				<UserDescriptionCard name="Anurag Sisodiya" number="+91-6397211086"/>
			</div>
			<div className="footerContainer">
				<Footer />
			</div>
		</div>
	)	
}