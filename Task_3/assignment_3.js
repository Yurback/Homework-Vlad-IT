// Используем хвостовую рекурсию
function toRegistrObjProp(o) {
    let newobj = {};
    for (let i in o) {
        let x = i;
        x = x.toUpperCase();
        if (typeof o[i] === "object") {
            newobj[x] = toRegistrObjProp(o[i]);
        } else {
            newobj[x] = o[i];
        }
    }

    return newobj;
}


// Проверяем
let obj = {
    time: 50,
    begin: "Lets get start",
    boolean: true,
    innerObj: {
        type: "string",
        title: "Inner Object",
        anotherObj: {
            one: 'one',
            two: 'two',
            three: 'three'
        }
    },
};

let uperObj = toRegistrObjProp(obj);

console.log(uperObj);

// получаем ответ, задача решена
//  {
//   TIME: 50,
//   BEGIN: 'Lets get start',
//   BOOLEAN: true,
//   INNEROBJ: {
//     TYPE: 'string',
//     TITLE: 'Inner Object',
//     ANOTHEROBJ: { ONE: 'one', TWO: 'two', THREE: 'three' }
//   }
// }

