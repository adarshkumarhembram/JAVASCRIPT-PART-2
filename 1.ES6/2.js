// Create an object person with two properties, "name" and "age" and then updates the "age"
// property to a new value. Initial age should be 30

let person={
    name: "Adarsh",
    age: 35
};

console.log(person.age);

// 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a
// horsepower property greater than or equal to 300)
function isSportsCar(car) {
    if (car && typeof car === 'object' && 'horsepower' in car) {
        return car.horsepower >= 300;
    } else {
        return false; // Return false if car is not a valid object or if it doesn't have the 'horsepower' property
    }
}

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };

console.log(isSportsCar(car1)); // Output: true
console.log(isSportsCar(car2)); // Output: false
