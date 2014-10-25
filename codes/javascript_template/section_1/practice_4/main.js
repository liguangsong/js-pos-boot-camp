//TODO: 请补完下面的函数以完成需求.
function printInventory(inputs) {
    var cart =[];
    for(var i in inputs){
        parseCode(inputs[i],function(parseResult){
            var good = findGoodByBarcode(parseResult.barcode);
            if(good){
                good.num = parseResult.num;
                addCart(good,cart);
            }
        });
    }
    var result = '***<没钱赚商店>购物清单***\n';
    for(var x in cart){
        var item = cart[x];
        result += '名称:'+item.name+',数量:'+item.num+item.unit+',单价:'+item.price+'(元),小计:'+item.num*item.price+'(元)\n';
    }
}

function parseCode(code,callback){
    var temp = code.split('-');
    var parseResutl = {
        barcode:temp[0],
        num :temp[1]?temp[1]:1
    };
    callback(parseResutl);
}

function findGoodByBarcode(barCode){
    var allItems = loadAllItems();
    for(var i in allItems){
        if(barCode == allItems[i]['barcode']){
            return allItems[i];
        }
    }
    return null;
}

function addCart(good,cart){
    var index = inCart(good,cart);
    if(index){
        cart[index]['num'] += 1;
    }else{
        cart.push(good);
    }
}

function inCart(good,cart){
    for(var i in cart){
        if(good.barcode == cart[i]['barcode']){
            return i;
        }
    }
    return null;
}

function inPromotion(good){
    var promotion = loadPromotions();

}