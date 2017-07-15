//import { Person } from './person';
const { Person } = require('./person');

//import { BMICalculator } from './bmi-calc';
const  { BMICalculator } = require('./bmi-calc');

function usage() {
	console.log(`Usage: node ${process.argv[1]} [target BMIs]`);
}

let afsoun = new Person({ 
	name: 'afsoun', 
	age: 36, 
	height: 163, 
	weight: 60
});

let [,,...params] = process.argv;

if (params.length === 0) {
	console.warn('WARN: No targets are passed.');
	usage();
} else {
	console.log('Person:', afsoun);
	console.log('Target BMIs:', params);

	BMICalculator.doAllCalcs(afsoun, ...params);
}
