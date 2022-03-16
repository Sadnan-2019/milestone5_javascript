const anthem ="Amar Sonar Bangla Ami tumai valobashi";

// const Words =anthem.split("");
const withOutA=anthem.split('a')
console.log(withOutA);

//using slice get value
const SmallSlice ='i love you honey';
const SpecificSlice =SmallSlice. slice(5,10);
console.log(SpecificSlice,'slice');

//substr using get alphabet value

const Another ='bangladesh amer gorbo';
const Substr = Another.substr(5,10)
console.log(Substr,'SUBSTR');


const anotherOne='ami ak jajabor';
const one=anotherOne.substring(5,10);
console.log(one,'substring');


const prothom='now';
const ditio ='done';

const joggol =prothom + " " + ditio.concat(' aho jaiga');
console.log(joggol);




const single= ['alim','badhon','camrul','dabit','elma'];
const joinsingle=single.join('www ');
console.log(joinsingle);
