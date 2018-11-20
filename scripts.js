const showManeuvers = (data) => {
    const maneuvers = data.route.legs[0].maneuvers
    const location = data.location
    maneuvers.forEach(function (entry) {
        const move = `<li>${entry.narrative}</li>`
        $("#directions-list").append(move)
    })
}

$("#go").on("click", function () {
    firstAddress = $("#firstAddress").val()
    secondAddress = $("#secondAddress").val()
    const apiKey = "laOe6DWBIQGVlWUQSlAnz8o7uUilhary"
    const directionsurl = "http://open.mapquestapi.com/directions/v2/route?key=" + apiKey + "&from=" + firstAddress + "&to=" + secondAddress

    $.ajax({
        url: directionsurl,
        success: showManeuvers
    })

});