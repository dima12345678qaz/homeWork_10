// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y, ,z] = arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]



//task2

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names,ages} = data;
//  let [, name2, ,name4]=names;
//  let [,age2, ,age4]=ages;
//  console.log(name2); // "Tom"
//  console.log(age2); // 24
//  console.log(name4); // "Bob"
//  console.log(age4); // 26
 


//task3

// function mul(...rest) {
//     let sum = 1;
//     let isAnyNumber = false;
//     for (let i = 0; i < rest.length; i++) {
//         if (typeof rest[i]==='number') {
//             isAnyNumber=true;
//             sum *=rest[i];
//         } 
        
//     }
//     return isAnyNumber ? sum:0
//  }
//  console.log(mul(1, "str", 2, 3, true)); // 6
//  console.log(mul(null, "str", false, true)); // 0
 


//task5


// function mapBuilder(keysArray, valuesArrays) {
//     let map = new Map()
//     for (let i = 0; i < keysArray.length; i++) {
//         map.set(keysArray[i], valuesArrays[i]);
        
//     }
//     return map;
// }
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"



//task4
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//        callback((function () {
//           return this.data + "";
//        }).bind(this));
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },
//     notification:(callback)=>  {
//         this.result=callback();
        
//     }
    // notification: function () {
    //    return (function (callback) {
    //       this.result = callback();
    //    }).bind(this);
    // }
// };
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
