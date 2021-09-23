module.exports = {
    login: (req,res) =>{
        //accessing what we declared in index.js
        const db = req.app.get("db")
        //expecting key called email and password from frontend 
        const {email, password} = req.body;
        //verify email is in db by calling database, email will be an array of obj.
        const email = db.get_user_by_email([email])
        //verify password matches email 




    }
}