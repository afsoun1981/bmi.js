class BMICalculator {
	static runCalc(personParam, targetBMI) {			
		let promise = new Promise((resolve) => {
			let person = personParam.clone();	
			
			let countDownInterval = setInterval(() => {
				let bmi = Math.round(person.getBMI() * 10) / 10;

				if (Math.abs(bmi - targetBMI) < 0.5) {
					console.log(`target ${targetBMI} weight is reached.`);
					clearInterval(countDownInterval);
					
					resolve();
					return;
				}

				if (bmi > targetBMI) {
					person.weight--;
				} else {
					person.weight++;
				}				
			}, 500);	
		});
		
		return promise;
	}

	static async doAllCalcs(person, ...targetBMIs) {		
		//person.getBMI();

		for (let targetBMI of targetBMIs) {
			await BMICalculator.runCalc(person, targetBMI);
		}

		console.log('Finished.');
	}
}

module.exports = {
    BMICalculator: BMICalculator
}
