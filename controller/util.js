import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getAllUser = (req,res) => {
    console.log(users);
    res.send(users);
};

export const createUser = ( req,res ) => { 
    const user = req.body;
    const userWithId = { ...user, id : uuidv4() };
    users.push(userWithId);
    res.send(`User ${user.FirstName} added to the database`); 
};

export const getUserById = (req,res) => {
    const {id } = req.params;
    const foundUser = users.find((user) => user.id == id );
    res.send(foundUser);
};

export const deleteUserById = (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id );
    res.send(`User with id ${id} deleted from the database.`)
};

export const updateUserById = (req,res) => {
    const { id } = req.params;
    const { FirstName, LastName, age } = req.body;

    const user = users.find((user) => user.id == id );
    if(FirstName) user.FirstName = FirstName;
    if(LastName) user.LastName = LastName;
    if(age) user.age = age;
    
    res.send(`User with id ${id} modified in the database.`);
};