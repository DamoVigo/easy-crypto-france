const url = "https://api.nasa.gov/planetary/apod?api_key="
const api_key = config.NASA_API_KEY
console.log("page api ok")

const fetchData = async () => {
    try {
        const response = await fetch(`${url}${api_key}`)
        const data = await response.json()
        console.log('NASA APOD data', data)
        displayData(data)
      } catch (error) {
        console.log(error)
      }
    }

const displayData = data => {
    document.getElementById("picture").src = data.hdurl;
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("titlePhoto").innerHTML = data.title;
    document.getElementById("explanation").innerHTML = data.explanation
}

fetchData()