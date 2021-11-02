const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	return response.json();
}

const logUsers = async () => {
	console.table(await getUsers());
}

export default logUsers;
