const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let isDown = false;

function handleMove(e) {
  if (!isDown) return;

  // Calculate position relative to the speed bar
  const y = e.pageY - speed.offsetTop;
  const percent = Math.min(Math.max(y / speed.offsetHeight, 0), 1);
  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  // Update bar height and label
  bar.style.height = `${Math.round(percent * 100)}%`;
  bar.textContent = `${playbackRate.toFixed(2)}×`;

  // Apply playback speed to video
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', () => (isDown = true));
speed.addEventListener('mouseup', () => (isDown = false));
speed.addEventListener('mouseleave', () => (isDown = false));
speed.addEventListener('mousemove', handleMove);
