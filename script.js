function test()
{
    // this function contains logpoints too
    console.log("This button works!");
    alert("This button works!");
}

var people = [] // this array will contain objects that represent users 
var uc = 0; // this is our user counter 
var lpc = null; // logged in player code (fancy name for position in array)
 
/*var people  // This people object won't be used but these are the properties of a user
{
    username;
    password;
    timePlayed;
    gamesPlayed;
    totalScore;
    avgScore;
}
*/


function login()
{
    let usernameTemp = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // check if the user has signed up already
    for (let i = 0; i < uc; i++)
    {
        if (usernameTemp == people[i].username && passwordTemp == people[i].password)
        {
            lpc = i;
            switchPage("home.html"); // no need 4 break cuz this call will break the cycle on its own
        }
        if (usernameTemp == people[i].username && passwordTemp != people[i].password)
        {
            // show smth about incorrect password
        }
        else 
        {
            // show smth about no user found or wrong username
        }
    }
    
}

function signup()
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
    people[uc] = {username: usernameTemp, password: passwordTemp, timePlayed: 0, gamesPlayed: 0, totalScore: 0, avgScore: 0};
    lpc = uc;
    uc++;

    switchPage("home.html");
}

function switchPage(target)
{
    // move stuff from array to lcl storage;
    localStorage.setItem('myUserData', JSON.stringify(people));
    window.location.href = target;
}

function loadHome()
{
    const storedData = localStorage.getItem('myUserData');
    people = JSON.parse(storedData) || [];
    
    console.log("Thy function 'loadHome' hath been summoned");
    console.log(lpc);
    console.log(people);

    let games_played = document.getElementById("games-played");
    let time_played = document.getElementById("time-played");
    let total_score = document.getElementById("total-score");
    let avg_score = document.getElementById("avg-score");
    let greetings = document.getElementById("user-greeting");

    if (people[lpc].gamesPlayed == 0)
    {
        //TODO show something that leads to the tutorial
    }

    greetings.innerHTML = "hello " + people[lpc].username;
    games_played.innerHTML = "games played " + people[lpc].gamesPlayed;
    time_played.innerHTML = "time played " + people[lpc].timePlayed;
    total_score.innerHTML = "total score " + people[lpc].totalScore;
    avg_score.innerHTML = "avg score " + people[lpc].avgScore;
}