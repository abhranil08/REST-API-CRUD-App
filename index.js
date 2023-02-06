import express from 'express';
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/users", userRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



