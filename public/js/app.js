

console.log('javascript')

// fetch('http://localhost:3000/weather?address=' + ).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         }
//         console.log(data)
        
//     })
// })

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherform.addEventListener('submit', (event) => {
    event.preventDefault()
    const address = search.value
    fetch('/weather?address=' + address ).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        }
        console.log(data)
        message1.textContent = 'Location is ' + data.location + ' and the Coordinates are ' + data.latitude + ',' + data.longitude
        message2.textContent = 'Temperature is ' + data.temperature + ' degree and humidity is ' + data.humidity

    })
})

    
})