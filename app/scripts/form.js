// Set local time to table booking form
var inputDate = $('#input-date');
var inputTime = $('#input-time');
var date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1, 
    y = date.getFullYear(),
    hour = date.getHours(),
    min = date.getMinutes();

if (d < 10) {
  d = '0' + d;
};
if (m < 10) {
  m = '0' + m;
};
if (hour < 10) {
  hour = '0' + hour;
};
if (min < 10) {
  min = '0' + min;
};

inputDate.val(y + '-' + m + '-' + d);
inputTime.val(hour+ ':' + min);
