function hazardWarningCreator (typeOfWarning){
    let warningCounter = 0;
    return function (location){ 
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const fireWarning = hazardWarningCreator('fire nation attack');
const toxicWarning = hazardWarningCreator("toxic cloud");

rocksWarning('Main St and Pacific Ave');
rocksWarning('Main St and Pacific Ave');
fireWarning('White House');
toxicWarning('Wakanda');
toxicWarning('Wakanda');
toxicWarning('Wakanda');