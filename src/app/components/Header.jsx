import logo from '../../../public/assets/LOGO.png'

function Header() {
	return (
		<header>
			<img src={logo} alt='La maison jungle' className='lmj-logo' />
			<nav>
				<ul>
					<li>Accueil</li>
					<li>A Propos</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
