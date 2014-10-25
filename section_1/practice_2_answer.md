答案如下:

```javascript
function printInventory(inputs) {

    var buyList = [],
        totalPrice = 0,
        item = {},
        itemDescs = [];


    for (var i = 0, maxInputs = inputs.length; i < maxInputs; i++) {

        if (buyList.length === 0) {
            item = inputs[i];
            item.count = 1;
            buyList.push(item);
            continue;
        }
        for (var j = 0, tmpMaxBuyList = buyList.length; j < tmpMaxBuyList; j++) {

            if (buyList[j].barcode === inputs[i].barcode) {
                buyList[j].count ++;
                continue;
            }

            if (buyList[j].barcode !== inputs[i].barcode && j === tmpMaxBuyList -1) {
                item = inputs[i];
                item.count = 1;
                buyList.push(item);
            }
        }
    }

    for (var k = 0; k < buyList.length; k++) {
        itemDescs.push('名称:' + buyList[k].name + ',数量:' + buyList[k].count + buyList[k].unit + ',单价:' + buyList[k].price.toFixed(2) + '(元),小计:' + (buyList[k].price * buyList[k].count).toFixed(2) + '(元)\n');
        totalPrice += buyList[k].price * buyList[k].count;
    }

    var resultText =
            '***<没钱赚商店>购物清单***\n' +
            itemDescs.join('') +
            '----------------------\n' +
            '总计:' + totalPrice.toFixed(2) + '(元)\n' +
            '**********************';
    console.log(resultText);
}

```