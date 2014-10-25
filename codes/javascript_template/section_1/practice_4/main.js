//TODO: 请补完下面的函数以完成需求.
function printInventory(inputs) {
    var cart =[];
    for(var i=0; i<inputs.length; i++){
        parseCode(inputs[i],function(parseResult){
            var good = findGoodByBarcode(parseResult.barcode);
            if(good){
                good.num = parseResult.num;
                addCart(good,cart);
            }
        });
        console.log(i);
    }
    console.log(cart);
}

function parseCode(code,callback){
    var temp = code.split('-');
    var parseResutl = {
        barcode:temp[0],
        num :temp[1]?temp[1]:0
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