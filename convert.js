const username = "bLankPINK";

const newuser = "bLankPiNK";

if (username.toLowerCase == newuser.toLowerCase) {
  console.log("user available");
}

const me = "sadnan";
const i = "sadNan";

// console.log(me.toLowerCase);
if (me.toUpperCase == i.toUpperCase) {
  console.log("user exist");
}

// using indexoF, searching element of  string.

products = [
  "purple color laptop with Phone",
  "black color phone with laptop",
  "red  color phone with iphone",
  "magenta color phone with ipad",
];

const result = [];
Searchinf = "red";
// for (const product of products) {
//   if (product.toLowerCase().indexOf(Searchinf.toLowerCase()) != -1) {
//     // console.log(product,"ok")
//     result.push(product);
//   }
// }

// console.log(result, "ok");

//using includes searching element of string
/* for (const product of products) {
  if (product.toLowerCase().includes(Searchinf.toLowerCase()) != -1) {
    // result.push(product);
  }
}

console.log(result, "heloo using includes"); */

//using startwith searching first starting value

for (product of products) {
  if (product.toLowerCase().startsWith(Searchinf.toLowerCase())) {
    result.push(product);
  }else{

          // result.push(product,'pawajainai')
          
  }
 }


console.log(result, "startwith");
