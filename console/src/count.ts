interface User {
	id: number;
	name: string;
}

const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users: Promise<User[]> = response.json();
	return users;
}

const validateUser = (user: User) => {
	return user.name.length > 0;
}

const countUserValidationCalls = async () => {
	const users = await getUsers();
	for (const user of users) {
		console.count('Validation checks');
		if (validateUser(user)) {
			console.count('Valid users');
		}
	}
}

export default countUserValidationCalls;
