class MyCls{ 

    constructor(){
        this.num = 11.
        console.log("From Construtor..");
    }

    getVal(){
        return this.num;
    }

    setVal(a=100){
            this.num = a;
    }
}

let p = new MyCls();
p.setVal(20000);
console.log(p.getVal());
