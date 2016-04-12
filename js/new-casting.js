// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {

  var dp1 = $('#datePicker').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true,
    // startDate: '0d',
    todayHighlight: true,
    orientation: 'left bottom'
  }).on('changeDate', function(ev) {
    // console.log('clicked dp1');
    // console.log($('#dp1').val());
  }).data('datepicker');

});