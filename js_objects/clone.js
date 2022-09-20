const objA = { a: 1, b: 1, c: { a: {} } }

 //#region 
 const objB = { a: 1, b: 1 }

 // console.log(objA === objB)

 const objC = objA; // copying the key 

 // console.log(objA === objC)

 objC.a = 10;
 objC.b = 20;

 // console.log(objA);
 //#endregion

 const objD = { ...objA } // {a: 1, b: 1}

 // console.log(objD === objA)
 for (let key in objA) {

 }



 // numbers strings booleans => value type
 // objects => reference type

 // pointer => { a: 1, b: 1 }


 // basement 
 // storages for unit 101, unit 102, unit 103...
 // the owners of the units have key to their storage

 function clone(objA) {
     let objB = {}
     for (key in objA) {
         objB[key] = objA[key]
     }
     console.log(objA === objB);
     return objB;
 }

 console.log(clone({ a: 1, b: 2, c: 3 }));