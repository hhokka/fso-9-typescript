
const calculateBmi = (heightInCentimeters: number, weightInKg: number) => {
    const heightInMeters = heightInCentimeters / 100;
    const heightSquared = heightInMeters * heightInMeters;
    const bmi = weightInKg / heightSquared;
    if (bmi < 16) {
        return ('Underweight (Severe thinness)');
    }
    if (bmi < 16.9 && bmi >= 16) {
        return ('Underweight (Moderate thinness)');
    }
    if (bmi < 18.4 && bmi >= 17) {
        return ('Underweight (Mild thinness)')
    }
    if (bmi < 24.9 && bmi >= 18.5) {
        return ('Normal (healthy weight)')
    }
    if (bmi < 29.9 && bmi >= 25) {
        return ('Overweight (Pre-obese)')
    }
    if (bmi < 34.9 && bmi >= 30) {
        return ('Obese (Class I)')
    }

}

console.log(calculateBmi(180, 74));