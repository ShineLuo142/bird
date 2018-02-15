$(_=>{
    let obj = {
        init(){
            this.biggerEvent();
        },
        biggerEvent(){
            $('#magnifier').magnifier();
        }
    }
    obj.init();
})