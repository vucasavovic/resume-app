const db = require('../utils/db')

const promisePool = db.promise();



exports.getById = async function(id){
    const sql = "SELECT * FROM user WHERE id = ?"
    try {
        const [rows] = await promisePool.query(sql,id);
        return rows[0];
    } catch (error) {
        throw error
    }
}


exports.getByEmail = async function(email){
    const sql = "SELECT * FROM user WHERE email = ?"
    try {
        const [rows] = await promisePool.query(sql,email);
        return rows[0];
    } catch (error) {
        console.log(error)
        throw error
    }
}



exports.register = async function(username, email, hashpass){
    const sql = "INSERT INTO user (username, email, hashpass) VALUES(?,?,?)"

    try {
        const [rows] = await promisePool.query(sql,[username, email, hashpass])
        return rows.insertId;
    } catch (error) {
         
        throw error
 
    }

}

exports.login = async function( email, password){
    const sql = " "

   

}

