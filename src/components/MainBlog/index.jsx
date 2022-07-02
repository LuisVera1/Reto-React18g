import './MainBlog.css';

export default function createMainBlog(Key) {
	return (
		<div>
			<div className="row">
				<img id="imgTitleArticle" src="" alt="image" />
			</div>

			<div className="row">
				<div className="card">
					<div className="CardHead">
						<div>
							<img src="./img/Madza.png" className="ImgTmb" />
						</div>
						<div className="CardTitleHead">
							<div className="Name">Madza</div>
							<div id="date" className="FS12 FGray">
								Posted on DATE
							</div>
						</div>
					</div>

					<div className="CardBody">
						<div className="ArticleName">
							<h2 id="articleTitle" className="FBold">
								TITLE
							</h2>
						</div>
						<div className="Hashtags">
							<a className="LinksHashtags FGray" href="#">
								{' '}
								#discuss{' '}
							</a>
						</div>
						<br></br>
					</div>

					<div id="MainBlog">
						<p id="textArticle"></p>
						<p>Main article here</p>

						<hr></hr>
						<strong id="numComments">Discussion (0)</strong>
						<br></br>
						<div id="listComments">
							<div className="tableComment">
								<p>Hola muy bueno</p>
							</div>
						</div>
						<textarea className="FS12 FGray inputMsj" placeholder="Add to the discussion" name="textarea" rows="10" cols="50">
						</textarea>
						<br></br>
						<button type="button" className="btn btn-sm Save">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
