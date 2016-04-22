// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
  $('#applicants-box h3').each(function() {
      var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
      tis.click(function() {
        state = !state;
        answer.slideToggle(state);
        tis.toggleClass('active',state);
      });
  });
    $(window).on('resize', resizeCalendar);
    
    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
        },
        weekends: false, // will hide Saturdays and Sundays
        defaultView: 'agendaWeek',
        viewDisplay: resizeCalendar,
        firstHour: (new Date()).getHours(),
        minTime: "07:00:00",
        maxTime: "24:00:00",
        slotDuration: "00:15:00",
        allDaySlot: false,
        timezone: "local",
        fixedWeekCount: false, // makes calendar just display the weeks in that month
        height: "auto",
        selectable: true,
//        selectHelper: true,
        select: function (start, end, jsEvent, view) {
            $('#calendar').fullCalendar('addEventSource', [{
                start: start,
                end: end,
                rendering: 'background',
                block: true,
            }, ]);
//            $("#calendar").fullCalendar("unselect");
        },
        selectOverlap: function(event) {
            return ! event.block;
        },
        editable: true, //for drag and drop
    })

	function resizeCalendar() {
        var currentView = $('#calendar').fullCalendar('getView');
        if(currentView.name === 'agendaWeek' || currentView.name === 'agendaDay') {
            currentView.setHeight(9999);
        }
        $('#calendar').fullCalendar('option', 'height', $('#calendar_container').outerHeight()*0.94);
    }
    
});



var data = [
  {role: "Romeo", applicants: [
      {name: "John Smith", accepted: true, rejected: false, pending: false, backup: false},
      {name: "Bob Smith", accepted: false, rejected: true, pending: false, backup: false},
      {name: "Scott Cozad", accepted: false, rejected: true, pending: false, backup: false},
      {name: "Ryan Arms", accepted: false, rejected: false, pending: false, backup: true}

  ]},
  {role: "Juliet", applicants: [
      {name: "Mariam Buttery", accepted: true, rejected: false, pending: false, backup: false},
      {name: "Leida Pelayo", accepted: false, rejected: true, pending: false, backup: false},
      {name: "Leida Pelayo", accepted: false, rejected: false, pending: false, backup: true},
      {name: "Tiffaney Marra", accepted: false, rejected: true, pending: false, backup: false}
  ]},
  {role: "Capulet", applicants: [
      {name: "John Smith", accepted: true, rejected: false, pending: false, backup: false},
      {name: "Bob Smith", accepted: false, rejected: true, pending: false, backup: false},
  ]},
  {role: "King", applicants: [
      {name: "John Smith", accepted: true, rejected: false, pending: false, backup: false},
      {name: "Bob Smith", accepted: false, rejected: true, pending: false, backup: false},
  ]}
];



