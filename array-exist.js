function megaFrirnds(friends) {
  if (Array.isArray(friends) == false) {
    return "please provide correct input";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      // console.log()
      mega = friend;
    }
  }

  return mega;
}

const friends = ["kolom", "boi", "khata", "bicanan", "balish"];

const NewFriends = megaFrirnds(253);
console.log(NewFriends, "aho bondhu");

//indexof use
if (friends.indexOf("lom") != -1) {
  console.log("indexof kolom");
} else {
  console.log("lom naio");
}

//includes use
if (friends.includes("khata")) {
  console.log("includes khata");
}

const prothom = ["a", "b", "c", "d"];
const ditio = ["e", "f", "g", "h"];

const jogfol = prothom.concat(ditio).concat(friends);
console.log(jogfol);

const sliceON = [1, 2, 3, 4, 5];
// const sliceNow = sliceON.slice(2, 5);
// console.log(sliceNow);
//using splice array remove
const spliceOn = sliceON.splice(2, 2,555,2222);
console.log(spliceOn);
console.log(sliceON);
