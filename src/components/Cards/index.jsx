import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

export default function createCard(data, key) {
	let name = '';
	let date = '';
	let title = '';
	let hastags = [];
	let reactions = 0;
	let comments = ''
	let img = ''
	let id = ''

	//console.log(data[0])

	try {
		// name = data[index].autorName;
		// date = data[index].date;
		// title = data[index].title;
		// hastags = data[index].hastags;
		// reactions = data[index].reactions
		// comments = data[index].comments
		// img = './img/' + name + '.png' 


		name = data.autorName;
		date = data.date;
		title = data.title;
		hastags = data.hastags;
		reactions = data.reactions
		comments = data.comments
		img = './img/' + name + '.png' 
		id = data.id


		// console.log(name)
		// console.log(date)
		// console.log(title)
		// console.log(hastags)
		// console.log(reactions)
		//console.log(id)

	}
	catch (error) {
		console.error(error);

		name = 'Name';
		date = 'date';
		title = 'title';
		hastags = ['hastag'];
		reactions = 0;
		comments = 0;
		img = 'none.png'
	}

	return (
		<div className="card1">
			<div className="cardHead">
				<div>
					<img className="imgThumb" src={img} />
				</div>
				<div className="cardTitleHead">
					<div className="name">
						<p>{name}</p>
					</div>
					<div className="date">
						<p>{date}</p>
					</div>
				</div>
			</div>

			<div className="cardBody">
				<div className="articleName">
					<a className="linkArticle" href={'http://localhost:3000/blog/' + id}>
						{title}
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
					{reactions + ' reactions'}
				</button>
				<button type="button" className="btn btn-sm linkReactions">
					<img className="reactions" src="img/Gb.png" />
					{'1' + ' comments'}
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
