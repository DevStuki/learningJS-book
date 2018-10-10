const USER_EMAIL = Symbol();
class User{
    set email(value){
        if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value;
    }
    get email(){
        return this[USER_EMAIL];
    }
}

const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);

class Rectangle {  //get만 있어서 읽기 전용
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    get perimeter(){
        return this.widthe*2 + this.height*2;
    }
}

const obj = { foo: "bar" };
Object.getOwnPropertyDescriptor(obj, 'foo');