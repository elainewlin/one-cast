$(function() {
//    console.log("loaded");
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
        selectable: true
        
    })

	function resizeCalendar() {
        var currentView = $('#calendar').fullCalendar('getView');
        if(currentView.name === 'agendaWeek' || currentView.name === 'agendaDay') {
            currentView.setHeight(9999);
        }
        $('#calendar').fullCalendar('option', 'height', $('#calendar_container').outerHeight()*0.94);
    }
    
});