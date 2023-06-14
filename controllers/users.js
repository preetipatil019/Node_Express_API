import { v4 as uuidv4 } from "uuid";

uuidv4();

let Users = [
   
]

export const getUsers =(req, res) => {
    console.log(Users)
    res.send(Users)
}


export const createUser = (req, res) => {
   
    const user = req.body
    
    Users.push({...user, id:uuidv4()})
    res.send(`user with name ${user.firstName} added to database`)
}


export const getUser =(req, res) => {
    const { id } = req.params;
    const searchUser = Users.find((user) => user.id === id);
    res.send(searchUser);
}


export const deleteUser = (req, res) => {
    const { id } = req.params;

    Users = Users.filter((user)=>user.id !== id)

    res.send(`user with ${id} deleted`)
    
}

export const updateUser =  (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body
    
    const user = Users.find((user) => user.id === id)
    
    if(firstName)
        user.firstName = firstName;
     if(lastName)
        user.lastName = lastName;
     if(age)
        user.age = age;
  
    res.send(`user with ${id} was updated`)
}

