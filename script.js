function test()
{
    console.log("This button works!");
    alert("This button works!");
}

var people = [] //* this array will contain objects that represent users 
var uc = 0; //* this is our user counter 
var lpc = null; //* logged in player code (fancy name for position in array)

function login() //! cannot login
{
    loadData();
    let usernameTemp = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //* check if the user has signed up already
    for (let i = 0; i < uc; i++)
    {
        if (usernameTemp == people[i].username && passwordTemp == people[i].password)
        {
            lpc = i - 1;
            switchPage("home.html"); //? no need 4 break cuz this call will break the cycle on its own
        }
        if (usernameTemp == people[i].username && passwordTemp != people[i].password)
        {
            //TODO show smth about incorrect password
        }
        else 
        {
            //TODO show smth about no user found or wrong username
        }
    }
    
}

function signup()
{
    let usernameTemp = document.getElementById("username").value;
    let passwordTemp = document.getElementById("password").value;
    //* This function checks if the new user has already signed up
    for (let i = 0; i < uc; i++)
    {
        if (people[i].username == usernameTemp && people[i].password != passwordTemp)
        {
            //TODO tell the user that the names's been taken
            console.log("yeah");
            return;
        }

        if (people[i].username == usernameTemp && people[i].password == passwordTemp)
        {
            //TODO tell the user they have to login or log them in automatically
            console.log("yeah yeah");
            return;
        }
    }

    //* Adds it to the array (which will be later turned into local storage)
    people[uc] = {username: usernameTemp, password: passwordTemp, timePlayed: 0, gamesPlayed: 0, totalScore: 0, avgScore: 0};
    lpc = uc;
    uc++;

    switchPage("home.html");
}

function switchPage(target)
{
    //* move stuff from array to lcl storage;
    localStorage.setItem('myUserData', JSON.stringify(people));
    //TODO add following comments to documentation:
    // .setitem method is used to store data in local storage
    // "myUserData" is the value under which it is stored
    // JSON.stringfy is a JSON method that converts an object (in this case people) to a JSON string
    // converting to a JSON string is necessary as localStorage supports only key-value data
    localStorage.setItem('lpc', lpc);
    localStorage.setItem('uc', uc);

    window.location.href = target;
}

function loadHome()
{
    loadData();
    
    let games_played = document.getElementById("games-played");
    let time_played = document.getElementById("time-played");
    let total_score = document.getElementById("total-score");
    let avg_score = document.getElementById("avg-score");
    let greetings = document.getElementById("user-greeting");

    if (lpc == null)
    {
        // TODO tell the user there was a problem logging in
    }

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

function logout()
{
    lpc == null;
    switchPage("../index.html");
}

function deleteAcc()
{
    people.splice(lpc, 1);
    switchPage("../index.html");
}

function loadData()
{
    const storedData = localStorage.getItem('myUserData');
    people = JSON.parse(storedData) || [];
    lpc = localStorage.getItem("lpc");
    uc = localStorage.getItem("uc");
}