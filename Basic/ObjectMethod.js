var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullname : function(){
        return this.firstName+" "+this.lastName;
    } 
  };


  console.log(person.fullname());


let obj = {     
      person : {
          firstName : 'Atul',
          lastName : 'K',
          fullname : function(){
            return this.firstName+" "+this.lastName;
          }
      },
      user : {
            firstName : 'Amit',
            lastName : 'P',
            fullname : function(){
            return this.firstName+" "+this.lastName;
            }
      } 
  }

  console.log(obj.person.fullname());
  console.log(obj.user.fullname());


  function valid(){
      let that = this;
   
        let obj = {     
            person : {
                firstName : 'Atul',
                lastName : 'K',
                fullname : function(){
                return that.firstName+" "+that.lastName;
                }
            },
            user : {
                firstName : 'Amit',
                lastName : 'P',
                fullname : function(){
                    return this.firstName+" "+this.lastName;
                }
            },
            firstName : 'Rahul',
            lastName : 'D',
            fullname : function(){
                return this.firstName+" "+this.lastName;
            }
        }
    console.log(obj.fullname());
  }

  valid();

  console.log("Using Built-In Methods");

  var message = "Hello world!";
  var x = message.toUpperCase();
  console.log(x);