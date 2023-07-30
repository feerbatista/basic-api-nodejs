import User from "../models/User.js";


export const createUser =  async (userData) => {
    try{

        const newUser = User.create(userData);
        return newUser
    }
    catch (error) {
        throw new Error("Não foi possível criar o usuário")
        
    }
}

export const getAllUser = async (userData) => {
    try{

        const users = User.find(userData)
        return users
    }
    catch (error) {
        throw new Error("Não foi possível criar o usuário")
        
    }
}

export const updateUser = async (id, userData) => {
    try{
        const updateUser = await User.findByIdAndUpdate(id,userData, {new: true})
        if(!updateUser){
            throw new Error('Usuário não encontrado')
        }

        return updateUser;
    }
    catch (error) {
        throw new Error("Não foi possível atualizar usuário")
    }
}


export const deleteUser =  async (id) => {
    try{

        const deleteUser = await User.findByIdAndDelete(id)

        if(!deleteUser){
            throw new Error("Usuário não encontrado")
            
        }

        return deleteUser
    } 
    catch (error) {

        throw new Error("Não foi possível deletar o usuário")
    }
}