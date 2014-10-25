//TODO: 请补完下面的函数以完成需求.
function printInventory(inputs) {
    var total = 0;
    var result = '***<没钱赚商店>购物清单***\n';
    for(var good in inputs){
        var item = inputs[good];
        result += '名称:' + item.name + ',数量:' + item.count + item.unit + ',单价:' + toFixed(item.price) + '(元),小计:' + toFixed(item.price * item.count) + '(元)\n'
        total += item.price * item.count;
    }
    result += '----------------------\n' + '总计:' + toFixed(total) + '(元)\n' + '**********************';
    console.log(result);

}