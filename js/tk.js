/**
 * Created by LSY on 2019/10/19.
 */
function tkAlert(ags){
    var btn = document.querySelector('button');
    var body = document.querySelector('body');
    var zhezhao = document.createElement('div');
    zhezhao.className = 'zhezhao';
    zhezhao.innerHTML = `<div class="alert">
    <div class="header">
    <span class="title">`+ags.title+`</span>
    <div class="close">x</div>
    </div>
    <div class="main"><div class="detail">`+ags.content+`<br><br>`+ags.tip+`</div><img src="${ags.url}"></div>
    <div class="btnList">
    <div class="btn">确定</div>
    <div class="btn">取消</div>
    </div>
    </div>`;
    body.insertBefore(zhezhao,videoListDiv);

    //在里面创建
    var close = document.querySelector('.alert .header .close');
    //console.log(document.querySelector('.alert .header .close'));
    close.onclick = function(){
        body.removeChild(zhezhao);
        body.innerHTML = '你点的是个啥呀?刷新一下吧'
    };
    var trueBtn = document.querySelector('.btnList .btn');
    //console.log(trueBtn);
    trueBtn.onclick = function(){
        typeof ags.confirmFn() == "function"?ags.confirmFn():console.log('error');
        body.removeChild(zhezhao);
    };
    var falseBtn = document.querySelectorAll('.btnList .btn')[1];
    falseBtn.onclick = function(){
        typeof ags.cancelFn() == 'function'?ags.cancelFn():console.log('error');
        body.removeChild(zhezhao);
    }
}
