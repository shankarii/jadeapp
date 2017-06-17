var express = require('express');
var router = express.Router();

exports.home = function(req,res){
    res.render('home',{
        title:"City",
        headline:"We Believe every city has something to say"
    });
};

exports.city = function(req,res){
    var cityName = req.params.city;
    var title,heading;
    var imageCount =4;
    
    if(cityName == "berlin"){
        title="Berlin";
        heading="Berlin: Where you see best cars on street";
    }
    else if(cityName=="paris"){
        title="Paris";
        heading="Paris: Where love is in the air";
    }
    else if(cityName=="rome"){
        title="Rome";
        heading="Rome: Land of pasta";
    }
    else if(cityName=="london"){
        title="London";
        heading="London: Royalty lives here...";
    }
    else if(cityName=="tokyo"){
        title="Tokyo";
        heading="Tokyo: The land of Samurai";
    }
    
    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount
    });
};               
