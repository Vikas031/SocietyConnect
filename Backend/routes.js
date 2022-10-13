const router=require('express').Router();
const MemberController=require('./controllers/MemberController');

router.post('/add-member',MemberController.add_member)


module.exports=router;