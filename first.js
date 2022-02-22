const request = new XMLHttpRequest();
const apiurl = "https://restcountries.com/v3.1/all";
request.open("GET", apiurl)
request.send()
request.onload = function() {
    if (request.status == 200) {
        let a = JSON.parse(request.responseText)
        a.filter((b) => b.region === "Asia").map((e) => {
            console.log(e.name.official)
        })
    } else {
        request.onerror = function() {
            console.log("error")
        }
    }
}