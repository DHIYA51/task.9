const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl)
request.send()


request.onload = function() {
    if (request.status == 200) {
        let a = JSON.parse(request.responseText)
        a.filter((x) => (x.population < 200000)).map((e) => {
            console.log(e.population);
        })
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}