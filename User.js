import Person from "./Person.js"

class User extends Person{
    constructor( _name,_age,_app){
       super(_name,_age)
       this.app=_app
    }
 
}


  export default User;

