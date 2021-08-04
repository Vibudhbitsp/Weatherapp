const request = require('request')

const forecast = (city,callback) => {
url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=3c96ff842993d9414abb81b9e15c7594&units=metric'
request({ url, json : true },(error,{body}) =>{
        if (error){
            callback('Unable to connect to weather services',undefined)
        }
        // else if(response.body.cod = 200){
        //       callback('unable to find location',undefined)
        // }
        
        else{
            callback(undefined,{
               temperature : body.main.temp,
               humidity : body.main.humidity,
               city : body.name,
            })

    }})
    }


module.exports =forecast