答案是:  

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
            var order = putOutOrder(connectedPromotion(cart));
            printOrder(order);
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
        
        function connectedPromotion(cart){
            var promotions = loadPromotions();
            for(var x in cart){
                var good = cart[x];
                for(var i in promotions){
                    var barcodes = promotions[i]['barcodes'];
                    for(var j in barcodes){
                        if(good.barcode == barcodes[j]){
                            good.promotion = promotions[i];
                            continue;
                        }
                    }
                }
            }
            return cart;
        }
        
        function putOutOrder(cart){
            for(var i in cart){
                var item = cart[i];
                var promotion = item.promotion;
                if(promotion){
                    switch (promotion.type){
                        case 'BUY_TWO_GET_ONE_FREE':
                            item.count = (parseInt(item.num/3)*2 + item.num%3)*item.price;
                            break;
                        default:
                            break;
                    }
                }else{
                    item.count = item.num * item.price;
                }
            }
            return cart;
        }
        
        function printOrder(order){
            var total = 0;
            var save = 0;
            var result = '***<没钱赚商店>购物清单***\n';
            for(var x in order){
                var item = order[x];
                result += '名称:'+item.name+',数量:'+item.num+item.unit+',单价:'+item.price.toFixed(2)+'(元),小计:'+item.count.toFixed(2)+'(元)\n';
                total += item.count;
            }
            result += '----------------------\n'+'挥泪赠送商品:\n';
            for(var y in order){
                var good = order[y];
                if(good.promotion){
                    result += '名称:'+good.name+',数量:'+parseInt(good.num/3)+good.unit+'\n';
                    save += parseInt(good.num/3) * good.price;
                }
            }
            result += '----------------------\n'+
                '总计:'+total.toFixed(2)+'(元)\n' +
                '节省:'+save.toFixed(2)+'(元)\n' +
                '**********************';
            console.log(result);
        }