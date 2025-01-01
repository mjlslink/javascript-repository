function bmiCalculator (weight, height) {  // kg, m^2
    var bmi = Math.round(weight/(Math.pow(height, 2)) *10) / 10;
    
    if(bmi < 18.5) {
        return "Your BMI is "+bmi+", so you are underweight.";
    } else if (bmi > 18.5 && bmi <24.9) {
        return "Your BMI is "+bmi+", so you have a normal weight.";
    } else if (bmi > 24.9) {
        return "Your BMI is "+bmi+", so you are overweight.";
    }
}
