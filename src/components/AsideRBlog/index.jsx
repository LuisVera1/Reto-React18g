import './AsideRBlog.css';

export default function createAsideRBlog(key) {
	return (
		<div>
			<div id="BorderDecoration" className="Box p-1">
				<div id="CardUser">
					<div>
						<img className="ImgTmb" src="./img/Madza.png" />
					</div>
					<span id="autorCard" className="p-2 FBold">
						Madza
					</span>
				</div>

				<div className="row justify-content-center">
					<button type="button" className="btn btn-sm CreateA">
						Follow
					</button>
				</div>

				<span className="FGray FS12">
					Top Rated Freelancer || Blogger || Cross-Platform App Developer || Web Developer || Open
					Source Contributor
				</span>
				<br></br>
				<br></br>
				<span className="FBold FS12 FGray">LOCATION</span>
				<br></br>
				<span className="FS12 FGray">Kolkata, West Bengal, India</span>
				<span className="FBold FS12 FGray">JOINED</span>
				<br></br>
				<span className="FS12 FGray">3 dic 2020</span>
			</div>

			<div className="Box2">
				<div className="BoxDiv">
					<span className="FBold">More from </span>
					<a className="LinkBlue FBold" href="#">
						Madza
					</a>
				</div>

				<div className="BoxDivW">
					<a className="FS12 FBold" id="LinksBoxes" href="#">
						6 Killer Productivity Apps for Programmers{' '}
					</a>
					<p className="FGray FS12">#programming # productivity # opensource #watercooler</p>
				</div>

				<div className="BoxDivW">
					<a className="FS12 FBold" id="LinksBoxes" href="#">
						25 Tips I Wish I Knew Before I Started to Code{' '}
					</a>
					<p className="FGray FS12">#productivity #career #beginners #webdev</p>
				</div>

				<div className="BoxDivW">
					<a className="FS12 FBold" id="LinksBoxes" href="#">
						5 Tips to Maximize Productivity Every Developer Must Know{' '}
					</a>
					<p className="FGray FS12">#career #productivity #discuss #motivation</p>
				</div>
			</div>
		</div>
	);
}
