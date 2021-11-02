import * as fakePromiseUtil from 'fake-promise-util';

const timeAsyncCall = async () => {
	console.time('async call');
	console.log('result that took time:', await fakePromiseUtil.success(1337, 1000));
	console.timeEnd('async call');
}

export default timeAsyncCall;
