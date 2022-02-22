const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl)
request.send()
request.onload = function() {
    if (request.status == 200) {
        let a = JSON.parse(request.responseText)
        a.forEach((x) => {
            console.log("Name:" + x.name.official);
            console.log("capital:" + x.capital);
            console.log("Flag:" + x.flags.svg);
        })
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}