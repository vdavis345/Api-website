// $( document ).ready(function() { 

//     $.ajax({})





// const getDirections = () =>{
//     console.log("getting directions")
// }

// const showDirections = ()=>{
//     console.log("show Directions")
// }


// });

// $( document ).ready(function() { 

//     $.ajax({
//         url:"AIzaSyBD9mILdjSJjw5k8eOgeHSfGc0CJsyMEgg",


// success: function(data){
//     console.log(data)
// }
//     })
// });

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