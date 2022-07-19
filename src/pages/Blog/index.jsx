//Imports
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Blog.css';

import AsideLBlog from '../../components/AsideLBlog';
import AsideRBlog from '../../components/AsideRBlog';
import MainBlog from '../../components/MainBlog';
import NavBar from '../../components/NavBar';

function Blog() {
	useEffect(() => {
		document.title = 'DEV Community 👩‍💻👨‍💻';
	}, []);

	const User = () => {
    const { userName } = useParams();
		console.log(userName)
	}



	return (
		<div className="App">
			{NavBar(1)}
			<div className="container g-0">
				<div className="row g-0">
					<aside className="col col-1 g-0">{AsideLBlog(2)}</aside>

					<main className="col col-8 g-0">{MainBlog(3)}</main>

					<aside className="col col-3 g-0">{AsideRBlog(4)}</aside>
				</div>
			</div>
		</div>
	);
}

export default Blog;
