import { createUser,getAllUser, updateUser, deleteUser } from "../services/userService.js"

export const createUserHandler = async(req,res) => {
    try {
        const { name, age } = req.body
        const newUser = await createUser({name, age})
        res.status(201).json(newUser)
    }
    catch(error){
        res.status(500).json({ error: error.message})
    }
}


export const getAllUserHandler = async (req,res) =>{
    try{
        const users = await getAllUser()
        res.status(201).json(users)
              
    }
    catch(error){
        res.status(500).json({ error: error.message})
    }
}


export const updateUserHandler = async (req, res) => {

    try {

        const { id }  = req.params;
        const { name , age } = req.body;
        const userUpdate = await updateUser(id, { name, age })
        res.json(userUpdate)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}


export const deleteUserHandler = async (req,res) => {

    try{
        const { id } = req.params;
        const userDelete = await deleteUser(id)
        res.json(userDelete)
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}