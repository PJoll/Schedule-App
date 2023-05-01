//👇🏻index.js
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});
const database= [];
const generateId = () => Math.random().toString(36).substring(2, 10);

app.post("/register" , (req, res) => {
    const {username, password, email} = req.body;
    let result= database.filter(
        (user) => user.email === email || user.username === username
    );
    if(result.length === 0){
        database.push({
            id: generateId(),
            username,
            password,
            email,
            timezone:{},
            schedule:{},
        });
        return res.json({message: "Account created successfully"});
    }
    res.json({error_message: "Username or email already exists"});
    console.log(req.body);
});
app.post("/login" , (req, res) => {
    const {username, password} = req.body;
   const result = database.filter(
         (user) => user.username === username && user.password === password
   );
    if(result.length !== 1){
        return res.json({error_message: "Invalid username or password"});
    }
    res.json({message: "Login successful",
     data:{
            _id: result[0].id,
            _email: result[0].email,
     }});
})
app.post("/schedule/create", (req, res) => {
    const {
        userId,timezone, schedule
    }= req.body;
    const result = database.filter((user) => user.id === userId);
    result[0].timezone = timezone;;
    result[0].schedule = schedule;
    res.json({message: "OK"});
    console.log(req.body)
})
app.get("/schedule/:id", (req, res) => {
    
})


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});