const express = require('express');
const { getAll, create, update, getByID, deletebyID, getUserById } = require('../../models/posts.model');
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
        const [posts] = await getAll();
        
        res.json(posts)
    }catch(error){
        res.json({ fatal:error.message });
    }

});

router.delete('/:postId',async (req,res)=>{
    const { postId } = req.params;
    
    try{

        const [cliente] = await getByID(postId);
        const [result] = await deletebyID(postId);
        
        res.json(cliente[0])

    }catch(error){
        res.json({ fatal:error.message })
    }
});

router.put('/:postId', async (req,res)=>{
    const { postId } = req.params;
    
    try{

        const [result] = await update(postId,req.body)
        const [cliente] = await getByID(postId)
        if (result.length === 0){
            res.json({ fatal: 'No existe usuario con este Id' });
        }
        res.json(cliente[0])

    }catch(error){
        res.json({ fatal:error.message })
    }
});


router.get('/:postId',async (req,res)=>{
    const { postId } = req.params;
    
    try{
        const [result] = await getUserById(postId);
    
        res.json(result)

    }catch(error){
        res.json({ fatal:error.message });
    }

});

module.exports = router;