const router = require('express').Router();

var Joi = require('@hapi/joi');

const validationSchema  = {
    name : Joi.string().min(6).required
}
router.post('/register',(req,res)=>{

const validation = Joi.validation(res.body,validationSchema);

     res.send(validation);
});

module.exports = router;