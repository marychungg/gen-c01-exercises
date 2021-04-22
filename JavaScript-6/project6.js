let getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 6;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 8;
      break;
      case 'thursday':
      return 9;
      break;
      case 'friday':
      return 5;
      break;
    }
  }
  
  let getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday'); 
  }
  
  let getIdealSleepHours = () => {
    let idealHours=6;
    return idealHours*7;
  }
  
  let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log ('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log ('You got more sleep than needed!')
    }
    if (actualSleepHours < idealSleepHours) {
      console.log ('You should get some rest.')
    }
  }
  
  calculateSleepDebt()