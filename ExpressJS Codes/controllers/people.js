let {people} = require('../data');

const getPeople = (req,res) => {
    res.status(200).json({success: true,data: people});
}
const postPeople = (req,res) => {
    res.status(201).send('Success');
}
const putPeople = (req,res) => {
    //  console.log(req);
      const {id} = req.params;
      const {name} = req.body;
    //  console.log(`isim : ${name}`);
      const person = people.find((person) => person.id === Number(id));
    //  console.log(person);
  
      if(!person){
          return res.status(404).json({success:false , msg: `no person with id ${id}`});
      }
      const newPeople = people.map((person) => {
          if(person.id === Number(id)){
              person.name = name;
              
          }
          return person;
      })
     // console.log(newPeople);
      return res.status(200).json({success:true,data:newPeople});
  }
const deletePeople = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    console.log(person);

    if(!person){
        return res.status(404).json({success:false , msg: `no person with id ${req.params.id}`});
    }
    const newPeople = people.filter((person) => {
        if(person.id !== Number(req.params.id)){
            return person;
        }
    })
    return res.status(200).json({success:true,data:newPeople});
}
module.exports = {
    getPeople,
    postPeople,
    putPeople,
    deletePeople,
}