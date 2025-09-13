/*let babysitter = {
    name: "sara",
    age: 25,
    experience: 3,
    languages: ["english", "arabic"]
};
let jsonstring = JSON.stringify(babysitter);
console.log("json string", jsonstring);
let obj = JSON.parse(jsonstring);
console.log("object", obj);

let books = {
    title: "the secret",
    author: "rhonda byrn",
    year: 2006,
    pages: 198
};
let jsonstring2 = JSON.stringify(books);
console.log("json string", jsonstring2);
let obj2 = JSON.parse(jsonstring2);
console.log("object", obj2);

// Fetching a single post
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("error", error));

// Fetching users list
fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("error", error));

// Displaying users in list format
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        let output = "<h2>Users</h2><ul>";
        users.forEach(user => {
            output += `<li>${user.name} - (${user.email})</li>`;
        });
        output += "</ul>";
        document.getElementById("result").innerHTML = output; // display on page
    })
    .catch(error => console.log("error", error));*/

// Weather fetching code
const cityCoords = {
    "new york": { lat: 40.7128, lon: -74.0060 },
    "los angeles": { lat: 34.0522, lon: -118.2437 },
    "chicago": { lat: 41.8781, lon: -87.6298 },
    "houston": { lat: 29.7604, lon: -95.3698 },
    "miami": { lat: 25.7617, lon: -80.1918 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("city").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("result").innerHTML =
            "City not found. Please enter a valid city name.";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("result").innerHTML = `
                    <h3>Current Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                    <p>Time: ${data.current_weather.time}</p>
                `;
            } else {
                document.getElementById("result").innerHTML =
                    "Weather data not available.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerHTML =
                "An error occurred while fetching the weather data.";
        });
});
