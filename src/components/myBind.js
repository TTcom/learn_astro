Function.prototype.myBind = function(context,...args){
    let fn = this
    let bind = function(...val){
             //new 了谁 this就指向谁 
            // 不是new的话，this就指向window
            //new了以后相当于不在将fn的this指向指向content，而是指向新创建的实例对象
            // console.log('tttttt',this)
            // console.log('binddddddddd',bind)
        if(this instanceof bind){
            fn.apply(this,val.concat(args))
        }else{
            fn.apply(context,val.concat(args))
        }
    }
    //将创建的对象原型指向fn
    bind.prototype = fn.prototype
    return bind

}

let obj = {
  name:"asd"
}
function say(val){
    console.log(this.name + val)
}
let peter =  say.myBind(obj,['hel'])

let apple = new perter('apple')
