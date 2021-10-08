module.exports = {
    login: async(req,res) =>{
        //accessing what we declared in index.js
        const db = req.app.get("db")
        //expecting key called email and password from frontend 
        const {email, password} = req.body;
        //verify email is in db by calling database, email will be an array of obj.passing parameter email
        const [userData] = await db.get_user_by_email([email])
        //verify password matches email 
        if (userData.email === email){
            if(userData.password === password){
                //return a success response 
                res.status(200).send(userData);
                //sending up all user data to front, later can slim down what is sent to the user to view after login
            } else {
                return res.status(200).send("Incorrect email or password")
            } } else {
                res.status(200).send("Incorrect email or password")
            }
        // console.log(userData);

        // res.status(200).send("this is a test");
    },

    register: async(req,res) =>{
        const db = req.app.get("db")
        const {email, password} = req.body;
        const [newUser] = await db.new_account([email, password])
            res.status(200).send("Sucessfully Registered");
            //not handling if a user is already registered
        
      
    }, 

    logout: async (req, res) => {
        res.status(200).send("sucessfully logged out")
    }
};