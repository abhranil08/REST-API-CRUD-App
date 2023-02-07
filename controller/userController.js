import { v4 as uuidv4 } from 'uuid';
import User from "../model/User.js";

export const getAllUsers = async( req, res, next ) => {
    let users;
    try
    {
        users = await User.find();
    }
    catch( error )
    {
        console.log( error );
    }

    if( !users )
    {
        return res.status(404).json({message: "No user found!! "});
    }
    return res.status(200).json({users});
}

export const createNewUserInDb = async( req, res, next ) => {
    const { FirstName, LastName, age, email } = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne( { email : email });
    }
    catch( error ) {
        console.log( error );
    }

    if( existingUser )
        return res.status(404).json({message: "User already exists!"});

    const user = new User({
        FirstName ,
        LastName,
        email,
        age
    });

    try{
        await user.save();
    }
    catch( error )
    {
        console.log( error );
    }
    res.status(201).json({user});
}

export const getUserByEmail = async( req, res, next ) => {
    const email = req.params.email;
    
    let existingUser;
    try{
        existingUser = await User.findOne({ email : email });
    }
    catch( error )
    {
        console.log( error );
    }
    if( existingUser )
        res.status(201).json({existingUser});
    else
        res.status(404).json({message : "User not found!"});
};

export const getUserByFirstName = async( req, res, next ) => {
    const email = req.params.FirstName;
    
    let existingUsers;
    try{
        existingUsers = await User.find(FirstName);
    }
    catch( error )
    {
        console.log( error );
    }
    if( existingUsers )
        res.status(201).json({existingUsers});
    else
        res.status(404).json({message : "User not found!"});
};

export const deleteUserByEmail = async(req,res, next) => {
    let deletedUser;
    try{
        deletedUser = await User.deleteOne( { email : req.params.email } );
    }
    catch( error )
    {
        console.log( error );
    }

    if( !deletedUser )
        res.status(500).json({message : "Unable to delete!"});
    else
        res.status(201).json({message : "Deleted User."});
};

export const UpdateUserByEmail = async(req,res, next) => {
    const emailToUpdate = req.params.email;
    const { FirstName, LastName, email, age } = req.body;

    let userUpdate;
    try{
        userUpdate = await User.updateOne( { email : emailToUpdate }, 
            { $set: {
                "FirstName" : FirstName, 
                "LastName" : LastName, 
                "email" : email,
                "age" : age
             } },
        );
    }
    catch( error )
    {
        console.log( error );
    }
    if( !userUpdate )
        res.status(500).json( {message : "Unable to update "});
    else
        res.status(201).json( {message : "User updated."});
};