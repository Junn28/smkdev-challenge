function timeToEat(text) {
  const textSplit = text.split(" ");
  const textHour = textSplit[0];
  const textTime = textSplit[1];
  const textHourSplit = textHour.split(":");
  const hour = parseInt(textHourSplit[0]);
  const minute = parseInt(textHourSplit[1]);
  const breakfastOrDinnerSplit = "7:00".split(":");
  const lunchSplit = "12:00".split(":");
  let breakfastOrDinnerHour = parseInt(breakfastOrDinnerSplit[0]);
  let breakfastOrDinnerMinute = parseInt(breakfastOrDinnerSplit[1]);
  let lunchHour = parseInt(lunchSplit[0]);
  let lunchMinute = parseInt(lunchSplit[1]);

  switch (textTime) {
    case "a.m.":
      if (hour === 12) {
        if (minute === breakfastOrDinnerMinute) {
          console.log(
            `${breakfastOrDinnerHour} Hour until the next meal, breakfast`
          );
        } else {
          breakfastOrDinnerHour--;
          let minuteDifference = 60 - minute;
          console.log(
            `${breakfastOrDinnerHour} Hour and ${minuteDifference} minutes until the next meal, breakfast`
          );
        }
      } else if (hour <= breakfastOrDinnerHour) {
        if (minute > breakfastOrDinnerMinute) {
          breakfastOrDinnerHour--;
          let minuteDifference = 60 - minute;
          let hourDifference = breakfastOrDinnerHour - hour;
          console.log(
            `${hourDifference} Hour and ${minuteDifference} minutes until the next meal, breakfast`
          );
        } else {
          let hourDifference = breakfastOrDinnerHour - hour;
          console.log(`${hourDifference} Hour until the next meal, breakfast`);
        }
      } else {
        if (minute > lunchMinute) {
          lunchHour--;
          let minuteDifference = 60 - minute;
          let hourDifference = lunchHour - hour;
          console.log(
            `${hourDifference} Hour and ${minuteDifference} minutes until the next meal, lunch`
          );
        } else {
          let hourDifference = lunchHour - hour;
          console.log(`${hourDifference} Hour until the next meal, lunch`);
        }
      }
      break;
    case "p.m.":
      if (hour === 12) {
        if (minute === breakfastOrDinnerMinute) {
          console.log(
            `${breakfastOrDinnerHour} Hour until the next meal, dinner`
          );
        } else {
          breakfastOrDinnerHour--;
          let minuteDifference = 60 - minute;
          console.log(
            `${breakfastOrDinnerHour} Hour and ${minuteDifference} minutes until the next meal, dinner`
          );
        }
      } else if (hour >= 1 && hour <= 7) {
        if (minute > breakfastOrDinnerMinute) {
          breakfastOrDinnerHour--;
          let minuteDifference = 60 - minute;
          let hourDifference = breakfastOrDinnerHour - hour;
          console.log(
            `${hourDifference} Hour and ${minuteDifference} minutes until the next meal, dinner`
          );
        } else {
          let hourDifference = breakfastOrDinnerHour - hour;
          console.log(`${hourDifference} Hour until the next meal, dinner`);
        }
      } else console.log("sorry, meal time is over");
      break;
  }
}
timeToEat("1:00 a.m.");
