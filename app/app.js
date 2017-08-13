var day;
var n = Math.floor((Math.random() * 7) + 1);
var dayOfThe_Week;

switch (n) {
    case ("1"):
        dayOfTheWeek = "Sunday";
        break;
    case ("2"):
        dayOfTheWeek = 'Monday';
        break;
    case ("3"):
        dayOfTheWeek = "Tuesday";
        break;
    case ("4"):
        dayOfTheWeek = "Wednesday";
        break
    case ("5"):
        dayOfTheWeek = "Thursday";
        break;
    case ("6"):
        dayOfTheWeek = "Friday";
        break;
    case ("7"):
        dayOfTheWeek = "Saturday";
        break;
    default:
        dayOfTheWeek = "Invalid Weekday";
        break;
}

consol.log(dayOfTheWeek);