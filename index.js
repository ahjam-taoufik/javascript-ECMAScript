class User{

   constructor(name,age){ 
       this.name=name;
       this.age=age;
   }

   getInfo(){
       console.log(`the name is ${this.name} and the age is ${this.age}`);
   }

}


const user1= new User('ali ' , 16);

user1.getInfo();

