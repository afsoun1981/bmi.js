class Person {
	constructor(config) {
		this.name = config.name;
		this.age = config.age;
		this.height = config.height;
		this.weight = config.weight;
	}

	getBMI() {
		let bmi = this.weight / ((this.height / 100) ** 2);
		console.log(`${this.name} with weight ${this.weight} BMI is: ${bmi}`);
		return bmi;
	}
	
	clone() {
		let clonedPerson = new Person(this);
		return clonedPerson;
	}
}

module.exports = {
    Person: Person
}
