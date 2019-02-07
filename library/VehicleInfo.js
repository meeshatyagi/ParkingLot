const util = require('util');

var data, result, colors, status;
var small, medium, large;

function sortByColor(vehicle, colored){
    result = [];
    data = vehicle;
    colors  = colored;
    console.log(util.inspect(data.filter((vehicle) => vehicle.color == colors), false, null, true)) ;
    return data.filter((vehicle) => vehicle.color == colors);  
}

function vehicleByType(vehicle){
    result = [];
    data = vehicle;
    small = data.filter((vehicle) => vehicle.type == 'small');
    medium = data.filter((vehicle) => vehicle.type == 'medium');
    large = data.filter((vehicle) => vehicle.type == 'large');

    result.push(data.filter((vehicle) => vehicle.type == 'small'));
    result.push(data.filter((vehicle) => vehicle.type == 'medium'));
    result.push(data.filter((vehicle) => vehicle.type == 'large'));
    return result;
}

function vehicleByTime(data,start,end){
    if(start.length != 4 && end != 4){
        return "Enter time in format hh:mm(i.e. 12:30). There is no handling for A.M. or P.M."
    } else {

    result = [];
    status = {};
    var vehicle = [];
    var i;
    var t ;
    
    for(i = 0; i<data.length ; i++){
        t = data[i].createdAt;
        t = t.toUTCString().substring(17,25);
        var hour  = t.substring(0,2);
        var minute = t.substring(3,5);
        status['hour'] = hour;
        status['min'] = minute;
        result.push(status);
        status = {};
    }

    for(i = 0; i<data.length ; i++){
        if(result[i].hour == start.substring(0,2) && result[i].hour <= end.substring(0,2)){
            if(result[i].min >= start.substring(3,5) &&  result[i].min <= end.substring(3,5)){
                console.log(result[i].hour + " first " + result[i].min)
                vehicle.push(data[i])
            }
        } else if(result[i].hour > start.substring(0,2) && result[i].hour < end.substring(0,2)){
            console.log(result[i].hour + " " + result[i].min)
            vehicle.push(data[i])
        } else if(result[i].hour > start.substring(0,2) && result[i].hour == end.substring(0,2)){
            console.log(result[i].hour + " second " + result[i].min)
            if(result[i].min <= end.substring(3,5)){
                vehicle.push(data[i])
            }        
        }
    }
    return vehicle;
}
}

module.exports = {
    sortByColor : sortByColor,
    vehicleByType : vehicleByType,
    vehicleByTime : vehicleByTime
}