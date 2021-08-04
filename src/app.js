const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const viewpath = path.join(__dirname,'../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

app.set('view engine','hbs')
hbs.registerPartials(partialspath)
app.set('views',viewpath)

console.log(path.join(__dirname,'../public'))
//app.com
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res) => {
    res.render('index',{user : 'vibudh',title : 'weather app'})
})




app.get('/help',(req,res) => {
    res.render('help',{user : 'vibudh',help : 'weather app'})
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/weather',(req,res) => {
    if(!req.query.address) {
        
        return res.redirect('/').send('enter address')
    }
    console.log(req.query.address)
    forecast(req.query.address ,(error,{temperature,humidity,city}) => {
        if (error){
            console.log('a')
            return res.send({error})
        }
        // console.log('Error',error)
        
        
        
        geocode (city,(error,{latitude,longitude,location} = {}) => {
            // console.log('Error',error)
            if(error){
                return res.send({error})
            }
            res.send({
                latitude,
                longitude,
                location,
                temperature,
                humidity,
                city
            })
        })
    })
    
        
    
})

app.get('/*',(req,res) => {
    res.send('my 404 page')
})
app.listen(3000,() => {
    console.log('server is up on port 3000')
})