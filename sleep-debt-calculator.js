const getSleepHours = day => {
  day.toLowerCase();
  switch (day) {
    case 'Monday':
      return 6.5;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 6;
      break;
    case 'Thursday':
      return 9;
      break;
    case 'Friday':
      return 7.5;
      break;
    case 'Saturday':
      return 10;
      break;
    case 'Sunday':
      return 10.5;
      break;
    default:
      return 'Invalid Day of the Week.';
      break;
  }
};
const getActualSleepHours = () => 6.5 + 8 + 6 + 
                                  9 + 7.5 + 10 + 10.5;
const getIdealSleepHours = nightHours => {
  return nightHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep!';
  } else if (actualSleepHours > idealSleepHours) {
      return `You got ${actualSleepHours - idealSleepHours} 
              hours over your ideal amount. That's more sleep than needed!`;
  } else if (actualSleepHours < idealSleepHours) {
      return `You got ${idealSleepHours - actualSleepHours} 
              hours under your ideal amount. You should get some rest!`
  } else {
      return 'Error';
  }
};
console.log(calculateSleepDebt());
