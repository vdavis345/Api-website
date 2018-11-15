
$( document ).ready(function() { 

    $.ajax({
        url:"http://open.mapquestapi.com/directions/v2/route?key=KEY&from=Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA",


success: function(data){
    console.log(data)
}
    })
// error:
    // })



});