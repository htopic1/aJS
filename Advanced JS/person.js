function Person(ime,prezime){
    this.firstName=ime
    this.lastName=prezime
    this.fullName=function(osoba){
        console.log(this.firstName+' '+this.lastName+' pozdravlja: '+osoba.firstName);
    }
}

var osoba=new Person('mika','mikic')
console.log(osoba);
osoba.fullName()
var osoba2=new Person('John','Doe')
osoba2.fullName()