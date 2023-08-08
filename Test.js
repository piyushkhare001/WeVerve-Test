// Define the station distances for Train A and Train B
const trainADistances = {
    "CHN": 0,
    "SLM": 350,
    "BLR": 550,
    "KRN": 900,
    "HYB": 1200,
    "NGP": 1600,
    "ITJ": 1900,
    "BPL": 2000,
    "AGA": 2500,
    "NDL": 2700
};

const trainBDistances = {
    "TVC": 0,
    "SRR": 300,
    "MAQ": 600,
    "MAO": 1000,
    "PNE": 1400,
    "HYB": 2000,
    "NGP": 2400,
    "ITJ": 2700,
    "BPL": 2800,
    "PTA": 3800,
    "NJP": 4200,
    "GHY": 4700
};

// Input for Train A
const trainAInput = [
    "TRAIN_A",
    "ENGINE",
    "NDL", "NDL", "KRN", "GHY", "SLM", "NJP", "NGP", "BLR"
];

// Input for Train B
const trainBInput = [
    "TRAIN_B",
    "ENGINE",
    "NJP", "GHY", "AGA", "PNE", "MAO", "BPL", "PTA"
];

// Function to calculate the distance from Hyderabad
function calculateDistanceFromHyderabad(stationDistances, stationCode) {
    return stationDistances["HYB"] - stationDistances[stationCode];
}

// Process Train A input
const trainA = [trainAInput[0]];
for (let i = 2; i < trainAInput.length; i++) {
    trainA.push({
        station: trainAInput[i],
        distance: calculateDistanceFromHyderabad(trainADistances, trainAInput[i])
    });
}

// Process Train B input
const trainB = [trainBInput[0]];
for (let i = 2; i < trainBInput.length; i++) {
    trainB.push({
        station: trainBInput[i],
        distance: calculateDistanceFromHyderabad(trainBDistances, trainBInput[i])
    });
}

// Merge and sort bogies
const mergedBogies = trainA.slice(1).concat(trainB.slice(1));
mergedBogies.sort((a, b) => b.distance - a.distance);

// Print arrival order for Train A and Train B
console.log("ARRIVAL " + trainA.join(" "));
console.log("ARRIVAL " + trainB.join(" "));

// Print departure order for Train AB
let departureOrder = "DEPARTURE TRAIN_AB " + trainA[1] + " " + trainB[1];
for (const bogie of mergedBogies) {
    departureOrder += " " + bogie.station;
}
console.log(departureOrder);
