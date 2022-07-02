import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function createCard(data, index) {
	const name = './img/' + data[index].autorName + '.png';
	// console.log(name);
	// console.log(index);

	return (
		<div className="card1">
			<div className="cardHead">
				<div>
					<img className="imgThumb" src={name} />
				</div>
				<div className="cardTitleHead">
					<div className="name">
						<p>{data[index].autorName}</p>
					</div>
					<div className="date">
						<p>Mar 27</p>
					</div>
				</div>
			</div>

			<div className="cardBody">
				<div className="articleName">
					<a className="linkArticle" href="http://localhost:3000/blog">
						{data[index].title}
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
					11 comments
				</button>
				<div className="spacer"></div>
				<div className="timeToRead p-1">
					<p>3 min read</p>
				</div>
				<button type="button" className="btn btn-sm save">
					Delete
				</button>
			</div>
		</div>
	);
}
