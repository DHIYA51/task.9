const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl)
request.send()
request.onload = function() {
    if (request.status == 200) {
        let y = JSON.parse(request.responseText)
        x = y.reduce((a, { population: p }) => a += p, 0)
        console.log(x)
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}