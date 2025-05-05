import logo from '../../../public/assets/LOGO.png'

function Header() {
	return (
		<header className="header">
			<img src={logo} alt="logo Kasa location immobilière" className="header__logo" />
			<nav className="header__menu">
			    <a href="/">Accueil</a>
				<a href="/a-propos/">A Propos</a>
			</nav>
		</header>
	)
}

export default Header
