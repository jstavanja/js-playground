const entryPoint = () => two();
const two = () => three();
const three = () => finalFunction();

const finalFunction = () => {
	console.log('Finally came to the end of the nested calls');
	console.trace();
}

export default entryPoint;
