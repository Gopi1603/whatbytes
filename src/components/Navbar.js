import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import avatarImage from "../assets/images/avatar.jpg";
const Navbar = () => {
	return (
		<div className="navbar_container">
			<nav className="navbar">
				{/* Logo */}
				<img src={logo} alt="Logo" />
				{/* User avatar Section */}
				<div className="user_profile">
					<img src={avatarImage} alt="Avatar" />
					<h3 className="username primary_text">Rahil Siddique</h3>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
