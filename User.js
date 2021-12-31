const { Person } = require("./Person")

class User extends Person{
    constructor( _name,_age,_app){
       super(_name,_age)
       this.app=_app
    }
 
}

 module.exports={User}

