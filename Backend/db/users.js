const knex = require("./knex");

function createUser(users){
    return knex("users").insert(users);
}

function getAllCar(){
    return knex("users").select("*");
}

function deleteUsers(id){
    return knex("users").where("id", id).del();
}

function updateUser(id,users){
    return knex("users").where("id", id).update(users);
}

module.exports = {
    createUser,
    getAllCar,
    deleteUsers,
    updateUser
}