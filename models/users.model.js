const getAll=() =>{
   return db.query('select * from autores'); 
}


const create=({ nombre, email, imagen }) =>{

    return db.query('insert into autores (nombre,email,imagen) values (?,?,?)',[nombre,email,imagen])
};


const update=(userId,{ nombre, email, imagen }) =>{

    return db.query('update autores set nombre=?,email=?,imagen=? where idAutores = ?',[nombre,email,imagen,userId])
};

const getAllpostsbyUserID=(userId) =>{
    //return db.query('select * from posts JOIN autores ON posts.autores_idAutores = autores.idAutores where posts.autores_idAutores=?',[userId]);
    return db.query('select * from posts where posts.autores_idAutores=?',[userId]);
 }

 const getByID=(userId) =>{
    
    return db.query('select * from autores where autores.idAutores=?',[userId]);
 };

 const deletebyID = (userId)=> {

    return db.query('delete from autores where autores.idAutores=?',[userId]);
 };
 

module.exports = {
    getAll,
    getAllpostsbyUserID,
    getByID,
    deletebyID,
    create,
    update
}