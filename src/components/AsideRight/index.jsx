import './AsideRight.css';

export default function createAsideRight() {
	return (
		<div>
			<div className="Box">
				<img className="rounded mx-auto d-block" id="Animation" src="img/Animation.gif" />
				<p className="FBold">Do You Have What it Takes to Break the Code?</p>
				<hr></hr>
				<a href="#" className="LinksAnimation">
					{' '}
					→ Play Break the Code 2{' '}
				</a>
				<a href="#" className="LinksAnimation">
					{' '}
					→ Learn more{' '}
				</a>
				<br></br>
				<a href="#" className="LinksAnimation">
					{' '}
					→ Discuss{' '}
				</a>
			</div>

			<div>
				<div className="Box2">
					<div>
						<img id="Deepgram" src="img/Deepgram.png" />
					</div>
					<div className="BoxDiv">
						<h5 className="FBold">
							<a id="LinkDeepgram" href="#">
								Deepgram x DEV Hackathon (28)
							</a>
						</h5>
					</div>
					<div className="BoxDivW">
						<a id="LinksBoxes" href="#">
							Write Articles With AI Speech Recognition and Live Preview!
						</a>
					</div>
					<div className="BoxDivW">
						<a id="LinksBoxes" href="#">
							{' '}
							Chattergram - a chat app that transcribes voice messages!{' '}
						</a>
					</div>
					<div className="BoxDivW">
						<a id="LinksBoxes" href="#">
							{' '}
							Hackathon submission - An audio search engine powered by Deepgram{' '}
						</a>
					</div>
					<div className="BoxDivW">
						<a id="LinksBoxes" href="#">
							{' '}
							[Deepgram x DEV Hackathon Submission Post Placeholder Title]{' '}
						</a>
					</div>
					<div className="BoxDivW">
						<a id="LinksBoxes" href="#">
							{' '}
							DeepGram AI ChatBot{' '}
						</a>
					</div>
					<div className="BoxDiv">
						<div className="d-flex flex-column align-items-center justify-content-center">
							<button type="button" className="btn btn-sm CreateA BtnSide">
								Submit Your Project!
							</button>
							<button type="button" className="btn btn-sm Save BtnSide">
								See all post
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="Box2">
				<div className="BoxDiv">
					<h5 className="FBold">Listings</h5>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						I created rattle 🐍 🐍 🐍. A password checker{' '}
					</a>
					<p className="FGray FS12">collabs</p>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						Panel Discussion: Meet the Decentralized Internet{' '}
					</a>
					<p className="FGray FS12">events</p>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						Generate video thumbnails with vanilla JS, ReactJS. Like YouTube has done [frontend
						completely]{' '}
					</a>
					<p className="FGray FS12">education</p>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						Render-Atlanta 2022 | 50+ Speakers | June 1 - 4 | Front-End Engineering & Web3{' '}
					</a>
					<p className="FGray FS12">collabs</p>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						📰 Unique, high-quality programming content delivered to your inbox every 2 weeks{' '}
					</a>
					<p className="FGray FS12">products</p>
				</div>
				<div className="BoxDivW">
					<a id="LinksBoxes" href="#">
						{' '}
						Create a Listing{' '}
					</a>
				</div>
			</div>
		</div>
	);
}
