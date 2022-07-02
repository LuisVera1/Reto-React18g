import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css';

export default function navBar(key) {
	return (
		// expand-md cuando se debe expandir
		<div>
			<div className=" navbar container-fluid bar"></div>
			<header className="container g-0">
				<nav className="navbar container navbar-expand-md g-0">
					<div className="elementsNB d-flex flex-row justify-content-between">
						<div id="logoSection">
							<a className="navbar-brand" href="http://localhost:3000/">
								<img className="logoNB" src="./img/LogoNB.png" alt="DevTo" />
							</a>
						</div>

						<div id="formSection">
							<form>
								<div className="d-flex flex-row justify-content-between">
									<div>
										<input
											className="form-control d-none d-lg-block"
											id="formSearch"
											type="search"
											placeholder="Search..."
											aria-label="Search"
										/>
									</div>

									<div>
										<button id="loginNB" className="btn mr-auto" type="button">
											Log in
										</button>
										<button id="createAccountNB" className="btn mr-1" type="button">
											Create account
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
