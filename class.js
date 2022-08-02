class car {
    constructor(name,cc,color,price,model){
    this.Name =name;
    this.EngineCC =cc;
    this.Color = color;
    this.Price =price;
    this.Model =model;
     
    }
    callmyname(){
        return(`my car name is ${this.Name}`);

    }
}
let BugattiDivo = new car(`BugattiDivo`,'7993','Black','1,350,900,000','2022');
console.log( BugattiDivo)