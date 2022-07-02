//Imports
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import navBar from './components/NavBar';
import navFilters from './components/NavFilters';
import Stories from './components/CStories';
import asideLeft from './components/AsideLeft';
import asideRight from './components/AsideRight';

import { list } from './services/users.js';

import Blog from './pages/Blog';
import createStorie from './components/CStories';
import createCard from './components/Cards';

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		document.title = 'DEV Community 👩‍💻👨‍💻';

		const getListQuery = async () => {
			const data = await list;

			const parsedArticles = Object.keys(data).map((key) => {
				return { id: key, ...data[key] };
			});

			setArticles(parsedArticles);
		};

		getListQuery();
	}, []);

	console.log(articles);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<div className="App">
						{navBar(1)}
						<div className="container g-0">
							<div className="row g-0">
								<aside className="col col-3 g-0">{asideLeft(2)}</aside>

								<main className="col col-6 g-0">
									{navFilters(1)}
									{createStorie(articles)}
									{createCard(articles, 0)} 
								</main>

								<aside className="col col-3 g-0">{asideRight(6)}</aside>
							</div>
						</div>
					</div>
				}
			/>
			<Route path="blog" element={<Blog />} />
			<Route path="login" element={<p>Login</p>} />
			<Route path="signup" element={<p>Signup</p>} />
		</Routes>
	);
}

export default App;
