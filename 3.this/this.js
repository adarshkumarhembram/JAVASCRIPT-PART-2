// global
console.log(this);

// function -window

function abcd() {
    console.log(this);
}
abcd();

// method object
var obj= {
    name: function(){
        console.log(this);
    }
}
obj.name();