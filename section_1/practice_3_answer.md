答案如下:

```javascript
    var totalPrice = 0,
        itemDescs = [],
        buyList = [],
        item = {},
        allItems = loadAllItems();

    for (var i = 0, maxAllItems = allItems.length; i < maxAllItems; i++) {

        for (var j = 0, maxInputs = inputs.length; j < maxInputs; j++) {

            if (allItems[i].barcode === inputs[j]) {
                if (buyList.length === 0) {
                    item = allItems[i];
                    item.count = 1;
                    buyList.push(item);
                    continue;
                }
                for (var k = 0, tmpMaxBuyList = buyList.length; k < tmpMaxBuyList; k++) {

                    if (buyList[k].barcode === inputs[j]) {
                        buyList[k].count++;
                        continue;
                    }

                    if (buyList[k].barcode !== inputs[j] && k === tmpMaxBuyList - 1) {
                        item = allItems[i];
                        item.count = 1;
                        buyList.push(item);
                    }
                }
            }
        }
    }

    for (var m = 0; m < buyList.length; m++) {
        var itemDesc =
                '名称:' + buyList[m].name +
                ',数量:' + buyList[m].count + buyList[m].unit +
                ',单价:' + buyList[m].price.toFixed(2) + '(元)' +
                ',小计:' + (buyList[m].price * buyList[m].count).toFixed(2) + '(元)\n';

        itemDescs.push(itemDesc);
        totalPrice += buyList[m].price * buyList[m].count;
    }

    var resultText =
            '***<没钱赚商店>购物清单***\n' +
            itemDescs.join('') +
            '----------------------\n' +
            '总计:' + totalPrice.toFixed(2) + '(元)\n' +
            '**********************';
    console.log(resultText);
```