const express = require('express');
const { getAll, getAllpostsbyUserID, create, update, getByID, deletebyID } = require('../../models/users.model');
const router = express.Router();

router.get('/',async (req,res)=>{
    
    try{
        const [result] = await getAll();
    
        res.json(result)

    }catch(error){
        res.json({ fatal:error.message });
    }

});

router.post('/', async(req,res)=> {

    try{
        const [result] = await create(req.body);
        const [clientes] = await getAll();
        
        res.json(clientes)
    }catch(error){
        res.json({ fatal:error.message });
    }

});

router.delete('/:userId',async (req,res)=>{
    const { userId } = req.params;
    
    try{

        const [cliente] = await getByID(userId);
        const [result] = await deletebyID(userId);
        
        res.json(cliente[0])

    }catch(error){
        res.json({ fatal:error.message })
    }
});

router.put('/:userId', async (req,res)=>{
    const { userId } = req.params;
    
    try{

        const [result] = await update(userId,req.body)
        const [cliente] = await getByID(userId)
        if (result.length === 0){
            res.json({ fatal: 'No existe usuario con este Id' });
        }
        res.json(cliente[0])

    }catch(error){
        res.json({ fatal:error.message })
    }
});


router.get('/:userId',async (req,res)=>{
    const { userId } = req.params;
    
    try{

        const [result] = await getAllpostsbyUserID(userId)
        if (result.length === 0){
            res.json({ fatal: 'No existe usuario con este Id' });
        }
        res.json(result)

    }catch(error){
        res.json({ fatal:error.message })
    }

});



module.exports = router;