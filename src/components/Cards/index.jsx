import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function createCard(key) {
	return (

    // <p key={key}>Hola tu</p>


		<div className="card">
			<div className="cardHead">
				<div>
					<img className="imgThumb" src="img/IC1.png" />
				</div>
				<div className="cardTitleHead">
					<div className="name"><p>Tapajyoti Bose</p></div>
					<div className="date"><p>Mar 27</p></div>
				</div>
			</div>

			<div className="cardBody">
				<div className="articleName">
					<a className="linkArticle" href="blog.html">
						Why Every Programmers Must Blog
					</a>
				</div>
				<div className="hashtags">
					<a className="linksHashtags" href="#">
						#discuss
					</a>
					<a className="linksHashtags" href="#">
						#beginners
					</a>
					<a className="linksHashtags" href="#">
						#career
					</a>
					<a className="linksHashtags" href="#">
						#watercooler
					</a>
				</div>
			</div>

			<div className="cardFoot">
				<button type="button" className="btn btn-sm linkReactions">
					<img className="reactions" src="img/Heart.png" />
					43 reactions
				</button>
				<button type="button" className="btn btn-sm linkReactions">
					<img className="reactions" src="img/Gb.png" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" role="img" aria-labelledby="addgckm6496tq4tgxhudg4ej5cc5d45f" className="reactions"><title>Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg> */}
					11 comments
				</button>
				<div className="spacer"></div>
				<div className="timeToRead p-1">3 min read</div>
				<button type="button" className="btn btn-sm save">
					Delete
				</button>
			</div>
		</div>
	);
}
