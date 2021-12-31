class Human {
  constructor(_name,_age,_gender){
      this.name=_name
      this.age=_age
      this.gender=_gender
  }
  getInfo(){console.log(`the name is ${this.name} and age is ${this.age} and gender is ${this.gender}`)}
}

class User extends Human{
    constructor(_name,_age,_gender,_app){
       super(_name,_age,_gender)
        this.app=_app
    }
    getInfo(){console.log(`
                          the name is ${this.name} and age is ${this.age} and gender is ${this.gender}
                          and app is ${this.app}`)}
    
}

const user1=new User('mohamed',14,'male','discord')
const user2=new User('fatima',16,'female','slack')

user1.getInfo()
user2.getInfo()






