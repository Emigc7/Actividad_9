const getAll=() =>{
    return db.query('select * from posts'); 
 }
 
 
 const create=({ Titulo, Descripcion, Fecha_creacion, Categoria, autores_idAutores }) =>{
 
     return db.query('insert into posts (Titulo, Descripcion, Fecha_creacion, Categoria, autores_idAutores) values (?,?,?,?,?)',[Titulo, Descripcion, Fecha_creacion, Categoria, autores_idAutores])
 };
 
 
 const update=(postId,{ Titulo, Descripcion, Fecha_creacion, Categoria, autores_idAutores }) =>{
 
     return db.query('update posts set Titulo=?,Descripcion=?,Fecha_creacion=?,Categoria=?,autores_idAutores=? where id = ?',[Titulo, Descripcion, Fecha_creacion, Categoria, autores_idAutores,postId])
 };
 
 const getUserById=(postId) =>{
     return db.query('select * from posts JOIN autores ON posts.autores_idAutores = autores.idAutores where posts.id=?',[postId]);
     //return db.query('select * from posts where posts.autores_idAutores=?',[userId]);
  }
 
  const getByID=(postId) =>{
     
     return db.query('select * from posts where posts.id=?',[postId]);
  };
 
  const deletebyID = (postId)=> {
 
     return db.query('delete from posts where posts.id=?',[postId]);
  };
  
 
 module.exports = {
     getAll,
     getUserById,
     getByID,
     deletebyID,
     create,
     update
 }