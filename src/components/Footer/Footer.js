import React  from 'react';
import './Footer.module.css';
import logo from '../../assets/logo.svg';


const Footer = () => {
	

	return (
		<div className="FooterStyles">
			<p>
				Made for{' '}
				<a
					href="https://yit.co.il/"
					target="_blank"
					rel="noopener noreferrer"
				>
					YIT
				</a>{' '}
				using
				<a
					href="https://reactjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					 <img src={logo} className="logo" alt="logo" />
				</a>
				with ❤️ by{' '}
				<a
					href="https://github.com/AviLevin"
					target="_blank"
					rel="noopener noreferrer"
				>
					Avi Levin
				</a>{' '}
				2021
			</p>
		</div>
	);
};

export default Footer;
