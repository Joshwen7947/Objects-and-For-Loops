const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifing weights reptition ${rep}`);
}

const josh = [
    `Josh`,
    `Wenner`,
    2021 - 1997,
    `Teacher`,
    [`Aaron`, `Frank`, `Dan`]
];

const types = [];

for (let i = 0; i < josh.length; i++) {
    // reading from josh array
    console.log(josh[i], typeof josh[i]);

    // filling types array
    // types[i] = typeof josh[i];

    types.push(typeof josh[i]);
}

console.log(types);




const years = [1969, 1985, 1997, 2005];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// continue and breaks
for (let i = 0; i < josh.length; i++) {
    if (typeof josh[i] !== `string`) continue;

    console.log(josh[i], typeof josh[i]);
}

for (let i = 0; i < josh.length; i++) {
    if (typeof josh[i] === `number`) break;

    console.log(josh[i], typeof josh[i]);
}

const josh = [
    `Josh`,
    `Wenner`,
    2021 - 1997,
    `Teacher`,
    [`Aaron`, `Frank`, `Dan`]
];

for (let i = josh.length - 1; i >= 0; i--) {
    console.log(josh[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----starting exercise ${exercise}-----`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`lifting weights repetition ${rep}`);
    }
}


const population = 1000000;
const avgPopulation = 33000000;

if (population >= avgPopulation) {
    console.log(`Vietnam's population is above average`);
} else {
    console.log(`Population is below average`);
}

const numNeighbors = prompt(`How many neighbors does your country have?`);

if (numNeighbors === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbors > 1) {
    console.log(`More than 1 border`)
} else {
    console.log(`there is no fucking border, just water.`)
}

console.log(numNeighbors);