interface User {
	id: number;
	name: string;
	active: boolean;
}

const callOnlyIfUserActive = (user: User) => {
	console.assert(user.active, '%s is not an active user', user.name);
}

const functionThatRunsOnActiveUsers = () => {
	const users: User[] = [
		{ id: 1, name: 'John', active: true },
		{ id: 2, name: 'Jacob', active: false },
		{ id: 3, name: 'Rowan', active: true },
		{ id: 4, name: 'Ryan', active: true },
		{ id: 5, name: 'Brian', active: false },
	];

	for (const user of users) {
		callOnlyIfUserActive(user);
	}
}

export default functionThatRunsOnActiveUsers;
