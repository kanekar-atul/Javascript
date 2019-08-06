class FunctionExample { 
    
    examples():void { 
       console.log("Hello World!!!") 
    } 

    disp_details(id:number,name:string,mail_id?:string) { 
        console.log("ID:", id); 
        console.log("Name",name); 
        
        if(mail_id!=undefined)  
        console.log("Email Id",mail_id); 
     }

     addNumbers(...nums:number[]) {  
        var i;   
        var sum:number = 0; 
        
        for(i = 0;i<nums.length;i++) { 
           sum = sum + nums[i]; 
        } 
        console.log("sum of the numbers",sum) 
     }


     calculate_discount(price:number,rate:number = 0.50) { 
        var discount = price * rate; 
        console.log("Discount Amount: ",discount); 
     }


 } 
 var functionExampleObj = new FunctionExample(); 
 functionExampleObj.examples();
 functionExampleObj.disp_details(123,"John");
 functionExampleObj.disp_details(111,"mary","mary@xyz.com");

 functionExampleObj.addNumbers(1,2,3) 
 functionExampleObj.addNumbers(10,10,10,10,10)
 functionExampleObj.calculate_discount(1000);
 functionExampleObj.calculate_discount(1000, 0.30);