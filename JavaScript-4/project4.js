let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true; 

let runnerAge = 18;

if (raceNumber > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Race Number ${raceNumber} race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log (`Race Number ${raceNumber} late adults run at 11:00 am`);
} else if (runnerAge < 18) {
  console.log (`Race Number ${raceNumber} youth registrants run at 12:30 pm (regardless of registration)`)
} else {
  console.log ('Please see the registration desk')
}