$(_=>{
    let obj = {
        init(){
            if(localStorage.shoppingData){
                this.shoppingAllData =  JSON.parse(localStorage.shoppingData) ;
                localStorage.shoppingCarNum = this.shoppingAllData.length;
                this.shoppingCarHtml(this.shoppingAllData)
            }else{
                this.shoppingCarHtml()
            }
            
           
            this.selectEvent();
            this.clearShoppingCar()
        },
        shoppingCarHtml(data=[]){
            
            let str = '';
            for(let i = 0 ; i < data.length ;i ++){
                let item = data[i],isChecked = '';
                if(data[i].checked){
                    str += `
                    <tr>
                        <td>
                            <input type="checkbox" checked>
                        </td>
                    `
                }else{
                    str += `
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                    `
                }
                str += `
                    <td class="goods-info">
                        <img src="./image/shopping-car01.jpg" alt="商品小图">
                        <span>${item.name} </span>
                    </td>
                    <td>${item.innerRingText}</td>
                    <td>${item.timeRingText}</td>
                   
                    <td>${item.orginPrice}</td>
                    <td>${item.price}</td>
                    <td class="item-delete" data-num=${i}>删除</td>
                </tr>`
            }
            $("#tableContent").html(str)
            this.deleteItem();
            
        },
        shoppingData(){
            let data = [
                {
                    imgUrl:"./image/shopping-car01.jpg",
                    name:"Passion热情-白18K金钻石女戒",
                    innerRingText:"大淑女",
                    timeRingText:"老肥1",
                    fingerSize:"12.0",
                    orginPrice:"13444",
                    price:"13444"
                },
                {
                    imgUrl:"./image/shopping-car01.jpg",
                    name:"Passion热情-白18K金钻石女戒",
                    innerRingText:"大淑女",
                    timeRingText:"老肥2",
                    fingerSize:"12.0",
                    orginPrice:"13444",
                    price:"13444"
                }
            ]
            localStorage.shoppingCarNum = data.length;
            return data
        },
        selectEvent(){
            let domList = $('#tableContent tr td input'),that = this;
            $("#selectAll").change(function(){
                domList.each(function(index,dom){
                    $(dom).prop('checked',$("#selectAll").prop("checked"))
                })
                that.countMoney('1',$("#selectAll"))
            })
            domList.change(function(){
                let temp = true;
                domList.each(function(index,dom){
                    if(!$(dom).is(':checked')){
                        temp = false
                    }else{
                        that.shoppingAllData[index].checked = true
                    }
                })
                $("#selectAll").prop('checked',temp)
                that.countMoney('2',domList)
                console.log(that.shoppingAllData,'that.shoppingAllData')
            })

        },
        countMoney(type,dom){
            //type:1为全选按钮操作，2为单个按钮操作
            let payNum = 0;
            let data = this.shoppingAllData;
            if(type == '1'){
                if(dom.is(':checked')){
                    for(let i = 0 ; i < data.length; i++){
                        payNum += parseInt(data[i].price) 
                    }
                }else{
                    payNum = 0;
                }
            }else if(type == '2'){
                dom.each(function(index,item){
                    if($(item).is(':checked')){
                        payNum += parseInt(data[index].price)
                    }
                })
            }
            $(".payAllMoney").text(`￥${payNum}`)

        },
        selfComfirm(textString,cb){
            let str = `<div class="my-confirm">
            <p>${textString}</p>
            <button class="firstbutton">确定</button>
            <button class="cancel">取消</button>
            </div> `
            $('body').append(str);
            $(".firstbutton").click(function(e){
                cb(e)
            })
            $(".cancel").click(function(){
                $('body').find('.my-confirm').remove();
            })
        },
        deleteItem(){
            let that = this,shoppingData = this.shoppingAllData;
            $(".item-delete").click(function(){
                let num = $(this).data('num')
                //console.log(  $(this).data('num'))
                that.selfComfirm('确定要删除吗？',function(){
                    that.shoppingAllData = shoppingData.filter((ele,index)=>{
                        return index != num 
                    })
                    localStorage.shoppingData = JSON.stringify(that.shoppingAllData)
                    that.shoppingCarHtml(that.shoppingAllData)
                  
                    that.selectEvent(); 
                    $('body').find('.my-confirm').remove();
                })
            })
        },
        clearShoppingCar(){
            let that = this
            $("#clearShoppingCar").click(function(){
                that.selfComfirm('确定要删除吗？',function(){
                   
                    localStorage.shoppingData = '[]'
                    that.shoppingCarHtml('')

                    $('body').find('.my-confirm').remove();
                })
            })
        }
       
    }
    obj.init();
})