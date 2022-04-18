"use strict";

const hotel = {
  name: "MoHotel",
  categories: ["Puneri", "South Indian", "North Indian"],
  starter: ["Papad", "Panner Chilli", "Soup"],
  MainCourse: ["Veg", "Non-veg"],
};

// array desctructuring

const arr = [1, 3, 5];
const [x, y, z] = arr;
console.log(x, y, z);

const [Puneri, south] = hotel.categories;

console.log(Puneri, south);

let [nonveg, seafood] = hotel.MainCourse;
[nonveg, seafood] = [seafood, nonveg];
console.log(hotel.MainCourse);
