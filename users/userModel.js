const db = require("../database/config")

function find(){
    return db("users").select("id", "username", "department")
}

function findBy(filter){
    return db("users").select("id","username", "password", "department").where(filter)
}

function findById(id){
    return db("users").select("id", "username", "department").where({ id }).first()
}

async function add(user){
    const [id] = await db("users").insert(user)
    return findById(id)
}

module.exports = {
    find,
    findBy,
    findById,
    add
}