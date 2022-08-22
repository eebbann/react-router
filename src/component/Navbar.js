import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="navbar">
			<style jsx>
				{`
			.active{
       border-bottom:2px solid gold;
			}
			`}
			</style>
			<NavLink to="/" activeClasName="active">
				Home
			</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/products">Products</NavLink>
		</nav>
	);
};
export default Navbar;
