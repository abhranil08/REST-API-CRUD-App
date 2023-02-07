import express from 'express';
import userRoutes from "./services/userRoutes.js";
import mongoose from 'mongoose';

const app = express();
const mongoDBCred = "abcd";
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

mongoose.set('strictQuery', true);
mongoose.connect(mongoDBCred)
    .then(()=> app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`)))
    .then(()=> console.log("Connected!!"))
    .catch((err) => console.log(err));




