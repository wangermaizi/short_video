function getAjax(httpUrl,data,callbackFn) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',httpUrl+parseData(data));
    //对象转成字符串拼接
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            callbackFn(xhr);
        }
    };
    //console.log(data);
    function parseData(data) {
        var str = '?';
        for (var key in data) {
            str = str + key + '=' + data[key] + '&';
        }
        str = str.substr(0,str.length-1);//返回一个新的长度,不能用this
        return str
    }
}