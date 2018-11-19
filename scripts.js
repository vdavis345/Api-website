

$("#go").on("click", function(){
    // const addy = $("#textBox").val()
    // console.log(addy)})
    firstAddress= $("#firstAddress").val()
    console.log(firstAddress)
    secondAddress=$("#secondAddress").val()
    console.log(secondAddress)
$(document).ready(function () {const showManeuvers = (data) => {
console.log(data)
    const maneuvers = data.route.legs[0].maneuvers

    maneuvers.forEach(function (entry) {
       
        const move = `${entry.narrative}`
        console.log(move)
        $("#directions-list").append(move)
    })

}
    const apiKey = "laOe6DWBIQGVlWUQSlAnz8o7uUilhary"
    
    
    const directionsurl = "http://open.mapquestapi.com/directions/v2/route?key="+apiKey+"&from="+firstAddress+ "&to="+secondAddress
    


    $.ajax({
        url: directionsurl,


        success: showManeuvers
    })

    // error: funtion
    //     })

})

});