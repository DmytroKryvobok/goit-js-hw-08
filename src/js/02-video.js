import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');

const player = new Player(iframeEl);

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    });
}, 1000));

const timeToStart = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
console.log(timeToStart);

player.setCurrentTime(timeToStart);