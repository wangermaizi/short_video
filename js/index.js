//1\加载数据
//2\通过获取到的数据渲染出视频列表
//3\每个视频列表的播放按钮进行绑定事件

//渲染视频
function renderVideo(videoList) {
    videoList.forEach(function (item, index) {
        var videoItem = document.createElement('div');
        videoItem.className = 'videoItem';
        videoItem.innerHTML = `
            <div class="videoTop">
                <div class="img" style="background-image: url(${item.thumbnail})"></div>
                <button class="play" data-index='${index}' data-video="${item.video}"></button>
                <h3 class="title">${item.text}</h3>
                <p><span class="ico eyes"></span><span class="num">${item.up}</span><span>次播放</span></p>
            </div>
            <div class="videoBottom">
                <img src="${item.header}" alt="图片战术不见了" class="headerImg">
                <div class="right">
                    <div class="author">${item.top_comments_name}</div>
                    <div class="comment">${item.top_comments_content}</div>
                </div>
            </div>
        `
        videoListDiv.appendChild(videoItem);
    })
}
