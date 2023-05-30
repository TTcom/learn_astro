Function.prototype.myaplly = function (context,args){
    context.fn = this
    let reasult = context.fn(...args)
    delete context.fn
    return reasult
}

// let obj = {
//   name:"asd"
// }
// function say(val){
//     console.log(this.name + val)
// }
// say.apply(obj,['hel'])
