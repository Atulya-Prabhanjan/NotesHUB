var express = require("express");
var cors = require("cors");
var dao = require("./userDAO.js");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(express.static('public'));

app.get('/', function(request, response) {
    params = request.params;
    console.log(params);
    response.writeHead(200, { "content-type": "text" });
    response.write("Server running at port 5000");
    response.end();
});

app.post('/', function(request, response) {
    response.writeHead(403, { "content-type": "text" });
    response.write("Access Denied !!!");
    response.end();
})

app.post('/content', function(request, response) {
    param = request.body;
    console.log(param);
    response.write("content");
    response.end();
})

app.get('/users', dao.getUsers);

app.post('/rate', dao.rateNotes);

app.get('/rate', dao.getComments);

app.post('/notes', dao.insertNotes);

app.get('/notes', dao.getNotes);

app.get('/user', dao.findUser);

app.post('/user', dao.createUser);

app.post('/login', dao.validatelogin);

app.put('/user', dao.updateUser);

app.delete('/user', dao.deleteUser);

app.listen(port, function(error) {
    if (error) {
        console.log("there was an error " + error);
    } else {
        console.log("Server is up");
    }
})