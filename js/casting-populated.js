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



