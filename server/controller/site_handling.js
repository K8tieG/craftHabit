
module.exports = {

  //landing
  getCraft: async (req, res) => {
    //make a call query to the db to get existing entry craft will need where clause in db query
    const db = req.app.get("db");
    const { time, type } = req.params;
    try{let crafts = await db.return_craft([time, type]);
    //randmonly select 1 item from the returned array math.random
    let randomCraft = crafts[Math.floor(Math.random() * crafts.length)];
    //send that one item to the front update component file 
    res.status(200).send(randomCraft);}
    catch(e){
      console.log(e);
    }
  },

  //craft
  addFav: async (req, res) => {
    const db = req.app.get("db");
    //get craft id //get user id
    try{const { user_id, craft_id } = req.params;
    //insert into favorites table craft id and user id
    await db.add_fav([user_id, craft_id]);
    res.status(200).send("new favorite added");}
    catch(e){
      console.log(e)
    }
  },
  
  //profile
  deleteFav: async (req, res) => {
    //delete value based of id from url params
    const db = req.app.get("db");
    const { craft_id } = req.params;
    let crafts = await db.delete_fav([craft_id]);
    //find index of message object
    const deleteFav = crafts.find((crafts) => crafts.id == craft_id);
    //remove message from the messages array
    crafts.splice(deleteFav, 1);
    //return the updated messages array
    res.status(200).send(crafts);
  },

};