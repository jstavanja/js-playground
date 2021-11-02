interface User {
	id: number;
	name: string;
	active: boolean;
}

interface Item {
	id: number;
	name: string;
	price: number;
}

const logUserData = () => {
	const users: User[] = [
		{ id: 1, name: 'John', active: true },
		{ id: 2, name: 'Jacob', active: false },
		{ id: 3, name: 'Rowan', active: true },
		{ id: 4, name: 'Ryan', active: true },
		{ id: 5, name: 'Brian', active: false },
	];

	for (const user of users) {
		console.log("User data: ", user);
	}
}

const logItemData = () => {

	const items: Item[] = [
		{ id: 1, name: 'John', price: 13.37 },
		{ id: 2, name: 'Jacob', price: 100 },
		{ id: 3, name: 'Rowan', price: 23.23 },
		{ id: 4, name: 'Ryan', price: 2034.67},
		{ id: 5, name: 'Brian', price: 9.99 },
	];

	for (const item of items) {
		console.log("Item data: ", item);
	}
}

const logEverything = () => {
	console.group('Users');
	logUserData();
	console.groupEnd();

	console.groupCollapsed('Items');
	logItemData();
	console.groupEnd();
}

export default logEverything;
