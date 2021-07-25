//Display Date and time 
$(document).ready(function() {
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("MMMM, Do YYYY, hh:mm:ss a"));

    // Event Listener for local storage saves
    $('.saveBtn').on("click", function(){
      var textAreaValue = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, textAreaValue);

}); 
    // Time block function
    function updateClass(){
      var currentHour = moment().hours();

      $('.time-block').each(function(){

        var timeElementContainer = $(this).attr('id').split('-')[1];
        
        if (timeElementContainer < currentHour){
          $(this).addClass('past')
        }else if(timeElementContainer === currentHour){
          $(this).removeClass('past')
          $(this).addClass('present')
        }else{
          $(this).removeClass('past')
          $(this).removeClass('present')
          $(this).addClass('future')
          
          }
      })
    }
    updateClass();

    $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    $('#hour-1 .description').val(localStorage.getItem('hour-1'))
    $('#hour-2 .description').val(localStorage.getItem('hour-2'))
    $('#hour-3 .description').val(localStorage.getItem('hour-3'))
    $('#hour-4 .description').val(localStorage.getItem('hour-4'))
    $('#hour-5 .description').val(localStorage.getItem('hour-5'))

});





