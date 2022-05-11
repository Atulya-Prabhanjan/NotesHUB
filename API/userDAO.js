const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "NotesHUB",
    password: "Atulya02!",
    port: 5100,
})

function getUsers(request, response) {
    pool.query('SELECT username, name, email, number, pass, sessionToken from notes.user', function(error, results) {
        if (error) {
            console.log("Error detected");
            throw error;
        } else {
            response.status(200).json(results.rows);
        }
    })
}

async function rateNotes(request, response) {
    console.log("incoming notes rating ");
    var username = '';
    var rate;
    const token = request.body.sessionToken;
    const noteid = request.body.noteid;
    const rating = request.body.rating;
    const comments = request.body.comments;
    results = await pool.query("SELECT username FROM notes.user WHERE sessionToken = $1",[token]);
    if(results.rowCount>0){
        username = results.rows[0].username;
        console.log("the username is: " + username);
    }
    else{
        console.log("There are no rows");
        response.status(400);
        response.end();
        return;
    }
    results = await pool.query("INSERT INTO notes.rating (username, noteid, rating, comments) VALUES ($1,$2,$3,$4) ON CONFLICT ON CONSTRAINT pk DO UPDATE SET rating = $3, comments = $4;", [username, noteid, rating, comments]);

    results = await pool.query("SELECT AVG(rating) AS rate FROM notes.rating WHERE noteid = $1",[noteid]);
    if(results.rowCount>0){
        rate = results.rows[0].rate;
        console.log("the rating is: " + rate);
    }
    else{
        console.log("There are no ratings");
        response.status(400);
        response.end();
        return;
    }
    await pool.query("UPDATE notes.notes SET rating = $1 WHERE noteid = $2", [rate,noteid], function (error,results){
        if (error) {
            console.log("Error detected: " + error);
            throw error;
        } else {
            console.log("average rating: " + rate);
            console.log("note ID: " + noteid);
            response.status(200).json(results.rows);
        }
    })
}

function getNotes(request, response) {
    var q = request.query.search.replace(" ", "|");
    console.log("query String for notes = " + q);
    pool.query("SELECT noteid, description, author, subject, rating FROM notes.notes WHERE subject ~* $1 OR tags ~* $1 OR author ~* $1 OR description ~* $1 ORDER BY rating DESC", [q], function(error, results) {
        if (error) {
            console.log("Error detected: " + error);
            throw error;
        } else {
            response.status(200).json(results.rows);
        }
    })
}

function getComments(request, response) {
    var noteid = request.query.noteid;
    console.log("query String for comments = " + noteid);
    pool.query("SELECT username, comments FROM notes.rating WHERE noteid = $1 AND comments IS NOT NULL AND comments != '' ", [noteid], function(error, results) {
        if (error) {
            console.log("Error detected: " + error);
            throw error;
        } else {
            response.status(200).json(results.rows);
        }
    })
}

function findUser(request, response) {
    console.log(request.query.username);
    const id = parseInt(request.query.username);
    pool.query("SELECT username, name, email, number, pass FROM notes.user WHERE username = $1", [username], function(error, results) {
        if (error) {
            console.log(error);
            response.status(404);
        } else {
            response.status(200).json(results.rows);
        }
    })
}

function validatelogin(request, response) {
    console.log('Inside validateLogin : user name ', request.body.username);
    console.log('Inside validateLogin : password ', request.body.pass);
    const username = request.body.username;
    const pass = request.body.pass;
    pool.query("SELECT username, pass FROM notes.user WHERE username = $1 AND pass = $2", [username, pass], function(error, results) {
        if (error || results.rowCount == 0) { 
            console.log("Error while fetching in validateLogin");
            console.log(error);
            response.status(401);
            response.end();
        } else {
            var token = Math.round(Math.random() * 1000000);
            pool.query("UPDATE notes.user SET sessionToken = $1 WHERE username = $2", [token,username]);
            response.status(200).json({token:token});
            response.end();
        }
    })
}

async function createUser(request, response) {
    console.log(request.body);
    const username = request.body.username;
    const name = request.body.name;
    const mail = request.body.mail;
    const number = request.body.number;
    const pass = request.body.pass;
    var validdata = true;
    if (pass.length > 15 || username === null || username == '' || pass === null || pass == '') {
        response.status(400);
        response.end();
    }
    var userExist = await isUserExist(username); // handle await function
    if (!userExist) {
        pool.query("insert into notes.user(username, name, email, number, pass) values ($1,$2,$3,$4,$5)", [username, name, mail, number, pass], function(error, results) {
            if (error) {
                console.log(error);
                response.status(500);
                response.end();
            } else {
                response.status(200).json(results.rows);
                response.end();
            }
        })
    } else {
        response.status(409);
        console.log("hi");
        response.end();
    }
}

async function insertNotes(request, response) {
    console.log(request.body);
    var username = "";
    var noteid = 123;
    const token = request.body.sessionToken;
    const author = request.body.author;
    const subject = request.body.subject;
    const description = request.body.description;
    const tags = request.body.tags;
    if (tags === null || tags == '' || author === null || author == ''|| subject === null || subject == '' || description === null || description == '') {
        response.status(400);
        response.end();
    }
///////////////////////////////////////get username
    results = await pool.query("SELECT username FROM notes.user WHERE sessionToken = $1",[token]);
    if(results.rowCount>0){
        username = results.rows[0].username;
        console.log("the username is: " + username);
    }
    else{
        console.log("There are no rows");
        response.status(400);
        response.end();
        return;
    }
////////////////////////////////////////////////////Generate note id
    var row = 1;
    while(row > 0){
        noteid = Math.round(Math.random() * 100000000);
        results = await pool.query("SELECT noteid FROM notes.notes WHERE noteid = $1",[noteid]);
        row = results.rowCount;
    }
    console.log("the noteid is: " + noteid);
///////////////////////////////////////////////Insert details
    pool.query("insert into notes.notes(username, noteid, author, subject, description, tags, upload_date) values ($1,$2,$3,$4,$5,$6,CURRENT_DATE)", [username, noteid, author, subject, description, tags], function(error, results) {
        if (error) {
            console.log(error);
            response.status(500);
            response.end();
        } else {
            response.status(200).json(results.rows);
            response.end();
        }
    })
}

function updateUser(request, response) {
    console.log(request.body);
    const username = request.body.username;
    const name = request.body.name;
    const mail = request.body.mail;
    const number = request.body.number;
    const pass = request.body.pass;
    pool.query("update notes.user set name = $2, mail = $3, number = $4, pass = $5 where username = $1", [username, name, mail, number, pass], function(error, results) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            response.status(200).json(results.rows);
        }
    })
}

function deleteUser(request, response) {
    console.log(request.body);
    const id = request.body.userid;
    pool.query("delete from authentication.userprofile where userid = $1", [id], function(error, results) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            response.status(200).json(results.rows);
        }
    })
}

async function isUserExist(username) {
    pool.query("SELECT username FROM notes.user WHERE username = $1", [username], function(error, results) {
        if (results.rowCount > 0 || error) { //need to handle error code later
            console.log(error);
            return true;
        } else {
            return false;
        }
    })
}

module.exports = { getUsers, findUser, createUser, updateUser, deleteUser, validatelogin, getNotes, insertNotes, rateNotes, getComments };