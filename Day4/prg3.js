function calculateBonus(yearsOfExperience, performanceScore) {
    let bonusPercentage = 0;

    if (yearsOfExperience > 5) {
        bonusPercentage = 20; 
    }
    else if (yearsOfExperience > 3 && yearsOfExperience <= 5) {
        bonusPercentage = 15; 
    }
    else if (yearsOfExperience <= 3) {
        bonusPercentage = 10;
    }
    return bonusPercentage;
}

let yearsOfExperience = 4;
let performanceScore = 85;

let bonus = calculateBonus(yearsOfExperience, performanceScore);
console.log(`The bonus percentage for an employee with ${yearsOfExperience} years of experience is: ${bonus}%`);