const express=require('express');
const bodyParser=require('body-parser');
const userController=require('../controler/user')

const router=express.Router();
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())
router.get('/homePage',userController.homeFile);

router.get('/get-user',userController.getUser);

router.post('/add-user',userController.postuser);

router.delete('/delete-user/:userId',userController.deleteUserDetails);

module.exports = router;
