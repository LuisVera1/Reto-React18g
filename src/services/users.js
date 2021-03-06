const URL = 'https://prueba-post-16377-default-rtdb.firebaseio.com/'

const generateConfig = (body) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/JSON',
		},
		body: JSON.stringify(body),
	};
};
export const create = async (body) => {
	const requestConfig = generateConfig(body);
	const response = await fetch(
		'https://poised-shift-162315-default-rtdb.firebaseio.com/',
		requestConfig
	);
	const data = await response.json();
	return data;
};
export const retrieve = async (id) => {
	const response = await fetch(
		`https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`
	);
	const data = await response.json();
	return data;
};

export const list = async () => {
	const response = await fetch(URL + '.json');
	console.log(URL + '.json')
  const data = await response.json();
	return data;
};

export const update = async (id, body) => {
	const response = await fetch(
		`https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify(body),
		}
	);
	const data = await response.json();
	return data;
};
export const deleteUser = async (id, body) => {
	const response = await fetch(
		`https://poised-shift-162315-default-rtdb.firebaseio.com/${id}.json`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify(body),
		}
	);
	console.log(response.status);
	console.log(body);
	const data = await response.json();
	return data;
};
