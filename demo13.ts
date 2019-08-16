namespace men{
    export class dehua {
        public name:string='刘德华'
        talk(){
            console.log('我是刘德华')
        }
    }
}
namespace men2{
    export class dehua{
        public name:string='马德华'
        talk(){
            console.log('我是马德华')
        }
    }
}

let dehua1:men.dehua=new men.dehua()
let dehua2:men2.dehua=new men2.dehua()
dehua1.talk()
dehua2.talk()