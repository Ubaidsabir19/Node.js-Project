// initialize app
const express = require("express");
const app = express();

const userRouter = require("./routes/userController");
const middleware = require("./middleware/middleware");
const variables = require("./config/variables");

console.log(variables.username);

// initialize a server port
app.use(express.json());
app.listen(3000);

app.use(userRouter);
app.use(middleware);
app.use(variables);

// Get route
app.get('/', (req, res) => {
  res.send('Welcome to Home page');
});
