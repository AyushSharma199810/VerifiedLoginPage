const express =require('express');

const register= require('../Controller/User');
const router = express.Router();
router.post("/registeruser",register.register_user);
router.get("/",register.display)
router.post("/verify", register.logindetail);
router.get("/validate", register.validate);


module.exports = router;

