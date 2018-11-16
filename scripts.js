
const showManeuvers = (data) => {

    const maneuvers = data.route.legs[0].maneuvers

    maneuvers.forEach(function (entry) {
        console.log(entry.narrative);
        const move = `<li>${entry.narrative}</li>`
        console.log(move)
        $("#directions-list").append(move)
    })

}


$(document).ready(function () {
    // const apiKey = "AIzaSyCsmcUMF-5Tu24AMaOvHgymX6zEdlhZUsA"
    const directionsurl = "http://open.mapquestapi.com/directions/v2/route?key=laOe6DWBIQGVlWUQSlAnz8o7uUilhary&from=Clarendon%20Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA"



    $.ajax({
        url: directionsurl,


        success: showManeuvers
    })

    // error: funtion
    //     })



});