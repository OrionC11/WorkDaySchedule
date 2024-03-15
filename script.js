var saveButton = $('.saveBtn')
// this builds the function to save everything to local storage.
var save = function () {
  var value = $(this).siblings('.description').val()
  var hour = $(this).parent().attr('id')
  localStorage.setItem(hour, value)
}

$('#hour-9.description').val(localStorage.getItem('hour-9'))
$('#hour-10.description').val(localStorage.getItem('hour-10'))
$('#hour-11.description').val(localStorage.getItem('hour-11'))
$('#hour-12.description').val(localStorage.getItem('hour-12'))
$('#hour-13.description').val(localStorage.getItem('hour-13'))
$('#hour-14.description').val(localStorage.getItem('hour-14'))
$('#hour-15.description').val(localStorage.getItem('hour-15'))
$('#hour-16.description').val(localStorage.getItem('hour-16'))
$('#hour-17.description').val(localStorage.getItem('hour-17'))


// this on click function will run the save function we created above when you click the save button
saveButton.on('click', save)
// This uses DayJS to set the current hour
const currentHour = dayjs().hour().format('H')
// this updates the time-block background colors by changing the class based on the current time
$('.time-block').each(function () {
  var hour = parseInt($(this).attr('id').split('-')[1]);
  if (hour < currentHour) {
    $(this).addClass('past');
  } else if (hour === currentHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
})