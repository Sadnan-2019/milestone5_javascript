

function AddNumbers( ){

          // console.log(arguments)
          let result =0;

          for (const num of arguments) {

                      result =result + num;
                    
          }

          

           return result;





}

// const Numbers =();
const NewNumbers= AddNumbers(20,20,60,100,200)
console.log(NewNumbers)


function AddNames(){

          let FullName="";

          for (const part of arguments) {

          FullName = FullName + part + ' ';
                    
          }

          return FullName;


}



const Name = AddNames('MD','SADNAN','KORIM','ROHIM','SADIK')
console.log(Name)

