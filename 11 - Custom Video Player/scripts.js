; (function () {
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const toggleButton = player.querySelector('.toggle');
    const sliders = player.querySelectorAll('.player__slider');
    const skipsButton = player.querySelectorAll('[data-skip]');
    const progress = player.querySelector('.progress');
    const progressFiled = progress.querySelector('.progress__filled');


    function toggleHandler() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
    }

    function updatePlayButton() {
        const icon = this.paused ? '►' : '| |';
        toggleButton.innerHTML = icon;
    }

    function sliderHandler() {
        video[this.name] = this.value;
    }

    function skipHandler() {
        video.currentTime += parseFloat(this.dataset.skip);
    }

    function updateProgressFiled() {
        progressFiled.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
    }

    function jumpProgress(e){
        // 进度跳转
        const jumpTime = (e.offsetX  / this.offsetWidth) * video.duration;
        video.currentTime = jumpTime;
    }

    // 播放进度条
    video.addEventListener('timeupdate', updateProgressFiled);

    // 拖动进度条
    let mousedown = false;
    progressFiled.addEventListener('mousedown', () => mousedown = true);
    /*
      这里使用了  bool && function() 语法
      代表 bool === true  时 执行 function
      省去 if(bool){function()};
      类似的还有 bool || function() 
      即 bool === false 时 执行 function
     */
    progress.addEventListener('mouseup', (e) => mousedown && jumpProgress(e)); 
    progress.addEventListener('click', jumpProgress);


    //  按钮暂停/开始
    toggleButton.addEventListener('click', toggleHandler);
    video.addEventListener('click', toggleHandler);
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);

    // 播放速度/音量
    sliders.forEach(s => s.addEventListener('change', sliderHandler))
    // 快进/回退
    skipsButton.forEach(s => s.addEventListener('click', skipHandler))


}())