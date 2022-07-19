import './Stories.css';

export default function createStories(data,key) {

	let img = ''
	let title = ''

	try{
		img = data[0].imgPost
		title = data[0].title
	} catch (error){
		console.error(error)
		img = ''
		title = 'No data'
	}

	return (
		<div className="articles">
			<img
				id="imgTop"
				src={img}
				alt={title}
				title={title}
			/>
		</div>
	);
}
