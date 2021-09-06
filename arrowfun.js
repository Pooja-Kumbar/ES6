//longhand
function sayHello(name){
    console.log("Hello", name);
}
sayHello('pooja')


setTimeout(function (){
    console.log("Loading!!!");
},2000);


var list = {'social','science','maths','English'};
list.forEach(function(item) {
    console.log(item)
})



//Arrow functions
sayHello = (name)=>console.log("hello",name);
sayHello('pooja');

setInterval(() => console.log('Loading!!!'); , 2000);

var list = {'social','science','maths','English'};
list.forEach(console.log(item);)