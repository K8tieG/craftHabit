//array that keeps track of all crafts
let crafts = []
//id to assign to new crafts
let id = 0

module.exports = {

  //landing
  createCraft: (req, res) => {
      //creates new craft object using time/type off the request body req.body = craft?
    const{time, type} = req.body;
    crafts.push({id, time, type});
    id++
    res.status(200).send(crafts);
    },

  //craft
  addFav: (req, res) => {},

  //profile
  deleteFav: (req, res) => {},
};