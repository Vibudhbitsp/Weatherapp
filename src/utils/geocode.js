
const request = require('request')
const geocode = (address,callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmlidWRoMzM0IiwiYSI6ImNrcWV4emRzOTFwMzAyb3F0N2gyY3JyaDAifQ.Zw_nuFZLPl64DL_yvGMZVg&limit=1'
    request({ url, json : true },(error,{body}) =>{
    
        // console.log(response.body.features[0].center[0])
        if (body.features.length == 0){
            callback('unable to find location',undefined)
        }
        else{
           callback(undefined,{
               latitude : body.features[0].center[1],
               longitude : body.features[0].center[0],
               location : body.features[0].place_name
        })
        }
})
    }

module.exports = geocode