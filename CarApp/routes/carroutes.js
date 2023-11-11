const express=require('express');
const routes=express.Router();

const {createCar,fetchCar}=require('../controllers/carpost');
const {likecars}=require('../controllers/likecar');

routes.post('/addcar',createCar);
routes.get('/getcars',fetchCar);
routes.post('/likecar',likecars);

module.exports=routes;