import './Stories.css';

export default function createStories(data) {

	return (
		<div className="articles">
			<img
				id="imgTop"
				// src={data[0].imgPost}
				src="./img/ImgTop.png"
				alt={data[0].title}
				title={data[0].title}
			/>
		</div>
	);
}
