function test()
{
    // this function contains logpoints too
    console.log("This button works!");
    alert("This button works!");
}

var people = []; // this array will contain objects that represent users 
var uc = 0; // this is our user counter 
var lpc = null; // logged in player code (fancy name for position in array)
 
var person  // */ This person object won't be used but these are the properties of a user
{
    username;
    password;
    timePlayed;
    gamesPlayed;
    totalScore;
    avgScore;
}

function login()
{
    // Checks if the credentials are valid
}

function signup() //!  this fctn does not get called when i press button
{
    let usernameTemp = document.getElementById("username").value;
    let passwordTemp = document.getElementById("password").value;
    // This function checks if the new user has already signed up
    people.forEach(function (obj) {
        if (usernameTemp == obj.username && passwordTemp == obj.password)
        {
            //TODO suggest to the user he might have already signed up
            return;
        }
        if (usernameTemp == obj.username)
        {
            //TODO tell the user this username was already taken
            return;
        }
      });

    // Adds it to the array (which will be later turned into local storage)
    person[uc] = {username: usernameTemp, password: passwordTemp, timePlayed: 0, gamesPlayed: 0, totalScore: 0, avgScore: 0};
    lpc = uc;
    uc++;

    window.location.href = "home.html"
}

function loadHome()
{
    let games_played = document.getElementById("games-played");
    let time_played = document.getElementById("time-played");
    let total_score = document.getElementById("total-score");
    let avg_score = document.getElementById("avg-score");
    let greetings = document.getElementById("user-greetings");

    if (people[lpc].gamesPlayed == 0)
    {
        //TODO show something that leads to the tutorial
    }

    greetingsinnerHTML = "hello " + person[lpc].username;
    games_played.innerHTML = "games played " + person[lpc].gamesPlayed;
    time_played.innerHTML = "time played " + person[lpc].timePlayed;
    total_Score.innerHTML = "total score " + person[lpc].totalScore;
    avg_score.innerHTML = "avg score " + person[lpc].avgScore;
}