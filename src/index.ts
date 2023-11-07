import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

/* Index Properties */
// type Goods = {
//   [key: string]: number;
// };

// type Fruits = {
//   apples: number;
//   banana: number;
//   orange: number;
// };

// const fruits: Goods = {
//   apples: 15,
//   banana: 30,
//   orange: 30,
// };

// const frozenGoods: Goods = {
//   iceCream: 25,
//   fish: 30,
//   berry: 10,
// };

////////////////////////////////////

// type obj1 = {
//   [key: string]: string | number;
// };

// const userInfo: obj1 = {
//   name: "Bob",
//   age: 23,
//   country: "Ukraine",
// };

// const bookDescr: obj1 = {
//   title: "Adventures of Tom Sawyer",
//   page: 350,
//   year: 1876,
//   author: "Sir Mark Twain",
// };

/* Generics */
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

/////////////////////////////////

function reverse<Type>(items: Type[]): Type[] {
  return items.reverse();
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);

let strings = reverse<string>(["a", "b", "c", "d"]);
