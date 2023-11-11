const express=require('express');
const router=express.Router();

const {localUpload,imageUpload}=require('../controllers/fileUpload');

router.post('/localUpload',localUpload);
router.post('/imageUpload',imageUpload);

module.exports=router;