// read json data from FontFaceSetLoadEvent.json 
const foodData = require('./food.json');

// // Task 1
// function allFoodItem(){
//     return foodData;
// }

// // Task 2: list all Food Item with category vegetable
// function allVegetables() {
//     return foodData.filter((food)=>food.category === 'Vegetable');
// }

// // Task 3: list all food item with category fruit 
// function allFruits(){
//     return foodData.filter((food) => food.category === 'Fruit' );
// }

// // Task 4: list all food items with category protien 
// function allProtien(){
//     return foodData.filter((food)=> food.category=== 'Protien');
// }

// // Task 5: list all items nuts 
// function allNuts(){
//     return foodData.filter((food)=>food.category=== 'Nuts');
// }

// // Task 6: list all items grain 
// function allGrain(){
//     return foodData.filter((food)=> food.category === 'Grain');
// }

// // Task 7: list all Dairy products 
// function allDairyProducts(){
//     return foodData.filter((food)=> food.category === 'Dairy');
// }/

function listFood(food){
    if(food.length>0){
        return foodData.filter((food)=> food.category === food);
    }
    else{
        return foodData;
    }
}

listFood(Protien);







// Task 8: list all the food items with calorie above 100
function foodAboveCal(calorie){
    return foodData.filter((food)=> food.calorie > calorie);
}

// Task 9: list all the food items with calorie below 100
function foodBelowCal(calorie){
    return foodData.filter((food) => food.calorie < calorie);
}

function sortCalorie(condition){
    if(condition === 'asec'){
        return foodData.filter((food) => food.calorie < calorie);
    }
    else if(condition === 'desc'){
        return foodData.filter((food)=> food.calorie > calorie)
    }
}







// Task 10: list all the food items with highest protien content to lowest
function protienHighToLow(){
    return foodData.sort((a, b)=> b.protiens - a.protiens);
}

// Task 11: list all the food items with lowest cab content to highest
function cabLowtoHigh(){
    return foodData.sort((a, b) => a.cab - b.cab );
}

function sortCab(condition){
    if(condition==='protien'){
        return foodData.sort((a, b)=> b.protiens - a.protiens);
    }
    else if(condition==='cab'){
        return foodData.sort((a, b) => a.cab - b.cab );
    }
}





// Use Function with Examples 
console.log('Task 1: Vegetables');
console.log(allVegetables());

console.log('Task 2: Fruit');
console.log(allFruits());

console.log('Task 3: Portien');
console.log(allProtien());

console.log('Task 4: nuts');
console.log(allNuts());

console.log('Task 5: grains');
console.log(allGrain());

console.log('Task 6: Dairy');
console.log(allDairyProducts());

console.log('Task 7: items above 100 calorie');
console.log(foodAboveCal());

console.log('Task 8: Food item below 100 calorie');
console.log(foodBelowCal());

console.log('Task 9: Protien High to Low');
console.log(protienHighToLow());

console.log('Task 9: Cabs low to high');
console.log(cabLowtoHigh());