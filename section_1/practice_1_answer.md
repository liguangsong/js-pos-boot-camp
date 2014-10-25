答案如下:

```javascript
function printInventory(inputs) {

    var totalPrice = 0,
        itemDescs = [];
    
    for (var i = 0; i < inputs.length; i++) {
        itemDescs.push('名称:' + inputs[i].name + ',数量:' + inputs[i].count + inputs[i].unit + ',单价:' + inputs[i].price.toFixed(2) + '(元),小计:' + (inputs[i].price * inputs[i].count).toFixed(2) + '(元)\n');
        totalPrice += inputs[i].price * inputs[i].count;
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