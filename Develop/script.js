var saveButton = $('.saveBtn')
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

saveButton.on('click', save)
const currentHour = dayjs().hour().format('HH')
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