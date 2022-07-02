import './AsideLeft.css';

export default function createAsideLeft() {
	return (
		<div className="p-1 ms-5 me-2">
			<div id="spacing" className="p-1 mb-3 cardColor rounded">
				<div className="card-body">
					<h5 className="card-title">
						<a href="/" className="font-pcolor">
							<strong>DEV Community</strong>
						</a>
						<strong> is a community of 834,673 amazing developers</strong>
					</h5>
					<p className="card-text">
						We're a place where coders share, stay up-to-date and grow their careers.
					</p>
					<div className="d-grid gap-2">
						<button id="CreateAs" className="btn FBold" type="submit">
							Create account
						</button>
						<button id="LoginNB" className="btn FGray" type="submit">
							Log in
						</button>
					</div>
				</div>
			</div>

			<nav className="nav flex-column">
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/home.png" /> Home
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/listings.png" /> Listings
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/podcasts.png" /> Podcasts
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/videos.png" /> Videos
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/tags.png" /> Tags
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/FAQ.png" /> FAQ
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/forem.png" /> Forem Shop
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/sponsors.png" /> Sponsors
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/about.png" /> About
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/contact.png" /> Contact
				</a>
			</nav>

			<nav className="nav flex-column">
				<p className="MTR">
					<strong>Other</strong>
				</p>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/code_conduct.png" /> Code of Conduct
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/provacy-policy.png" /> Privacy Policy
				</a>
				<a className="nav-link list-group-item-action SideIC" href="#">
					<img className="icon" src="./img/terms-of-use.png" /> Terms of use
				</a>
			</nav>

			<div className="d-flex mt-3 justify-content-center">
				<div className="col-2 align-self-start">
					<li className="socialMedia">
						<img className="icon-sm" src="./img/twitter.png" />
						<a href="#"></a>
					</li>
				</div>
				<div className="col-2 align-self-center">
					<li className="socialMedia">
						<img className="icon-sm" src="./img/facebook.png" />
						<a href="#"></a>
					</li>
				</div>
				<div className="col-2 align-self-end">
					<li className="socialMedia">
						<img className="icon-sm" src="./img/git.png" />
						<a href="#"></a>
					</li>
				</div>
				<div className="col-2 align-self-end">
					<li className="socialMedia">
						<img className="icon-sm" src="./img/instagram.png" />
						<a href="#"></a>
					</li>
				</div>
				<div className="col-2 align-self-end">
					<li className="socialMedia">
						<img className="icon-sm" src="./img/twitch.png" />
						<a href="#"></a>
					</li>
				</div>
			</div>

			<div>
				<h6 className="MTR">
					<strong>Popular Tags</strong>
				</h6>
				<div className="overflow list-group">
					<ul className="list-unstyled fw-normal pb-1 small">
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#javascript
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#webdev
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#beginners
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#programming
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#tutorial
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#react
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#python
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#productivity
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#css
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#devops
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#node
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#html
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#andorid
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#php
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#codenewbie
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#codenewbie
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#aws
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#typescript
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#android
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#java
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#github
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#news
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#php
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#testing
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#linux
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#security
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#showdev
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#go
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#cloud
							</a>
						</li>
						<li>
							<a className="nav-link list-group-item-action SideIC" href="#">
								#database
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="p-0 mb-2  cardColor rounded">
				<div className="card-body">
					<h5 className="card-title">
						<img className="aside-image" src="./img/wa.png" />
						<a href="/" className="font-pcolor">
							<strong>Immerse yourself in the WebAssembly ecosystem ✅</strong>
						</a>
					</h5>
				</div>
			</div>

			<div className="p-0 mb-3  cardColor rounded">
				<div className="card-body">
					<h2 className="card-subtitle">
						<img className="aside-image" src="./img/forem-dev.png" />
						<a href="/" className="font-pcolor">
							<strong>The Forem Shop is Here!</strong>
						</a>
					</h2>
					<a href="https://shop.forem.com">&gt;&gt; Shop Forem, DEV, and CodeNewbie merch</a>
				</div>
			</div>
		</div>
	);
}
