class MemberController{
        async add_member(req,res){
            console.log(req.body)
        } 
}

module.exports=new MemberController();