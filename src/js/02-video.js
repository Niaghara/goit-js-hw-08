"use strict";

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    const time = data.seconds;
    localStorage.setItem(CURRENT_TIME, time);
  }, 1000)
);
const onTime = localStorage.getItem(CURRENT_TIME);

player
  .setCurrentTime(onTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
