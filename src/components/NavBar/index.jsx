import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css';

export default function navBar(key) {
	return (


    // expand-md cuando se debe expandir

    <header>
      <nav class="navbar container navbar-expand-md g-0">
        <div class="elementsNB d-flex flex-row justify-content-between">

        <div id="logoSection">
          <a class="navbar-brand" href="http://localhost:3000/">
            <img class="logoNB" src="./img/LogoNB.png" alt="DevTo"/>
          </a>
        </div>

        <div id="formSection">
          <form>
            <div class="d-flex flex-row justify-content-between">

              <div id="d1">
                <input class="form-control d-none d-lg-block" id="formSearch" type="search" placeholder="Search..." aria-label="Search"/>
              </div>

              <div id="d2">
                <button id="loginNB" class="btn mr-auto" type="submit">Log in</button>
                <button id="createAccountNB" class="btn mr-1" type="submit">Create account</button> 
              </div>
            </div>
          </form>
        </div> 

        </div>
      </nav>
    </header>

	);
}