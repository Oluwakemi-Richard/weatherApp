$(document).ready(function(){
  $('#Weatherbtn').click(function(){
    var city = $('#city').val();
    if(city!=''){

      $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q=city"+"&units=metric"+"&APPID=f308ce9e960ca70022c153a818ec6895",
        type:"GET",
        dataType:"jsonp",
        success: function(data){
          var widget = show(data);

          $("#show").html(widget);

          $('#city').val('');
        }
      });
    }else{
      $("#error").html("Field cannot be empty");
    }
  });
});
function show(data){
  return "<h3><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
        "<h3><strong>Weather</strong>: "+data.weather[0].description+"</h3>";
}