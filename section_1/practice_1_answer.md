答案如下:

```javascript
var total = 0;
    var result = '***<没钱赚商店>购物清单***\n';
    for(var good in inputs){
        var item = inputs[good];
        result += '名称:' + item.name + ',数量:' + item.count + item.unit + ',单价:' + item.price.toFixed(2) + '(元),小计:' + (item.price * item.count).toFixed(2) + '(元)\n';
        total += item.price * item.count;
    }
    result += '----------------------\n' + '总计:' + total.toFixed(2) + '(元)\n' + '**********************';
    console.log(result);
```