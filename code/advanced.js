/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1];
england.touristAttractions = ["Lake District", "London Eye", "Peak District"]

console.log(england);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2];
wales.capital = "Cardiff";

console.log(wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */
scotland = unitedKingdom[0];
northernIreland = unitedKingdom[3];
count = 0
populations = [england.population, wales.population, northernIreland.population];
for(i = 0; i < populations.length; i ++){
    if(scotland.population < populations[i]) {
        count ++;
    } 
} 
if(count == 0) {
    console.log("Scotland is the biggest")
} else if (count == 3) {
    console.log("Scotland is the smallest")
} else {
    console.log("Scotland is somewhere in the middle.")
}