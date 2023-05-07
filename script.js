/*
Теоретичні питання
1.Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
setTimeout() -отложенный запуск чего-то, т.е. вызвать функцию или вывести что-то через какое-либо время (единожды)
setInterval() - делать чтото с каким-то (указанным) интервалом,  к примеру обновлять или запускать какуюто функцию с указанным интервалом

2. Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
- сработает, но не сразу, глазу не заметно но команды написанные ниже сработают быстрее, а потом то что в сеттаймауте

3. Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
- таймеры нагружают страницу и продолжают вести отсчет уже после того как выполнили нужное, таких таймеров может быть много и они
могут накапливаться, потому ненужные таймеры которые выполнили свои функции правильно останавливать через clearInterval, clearTimeout


*/
// const btnStart = document.getElementById('start');
// const img1 = document.getElementById('img1');
// const img2 = document.getElementById('img2');
// const img3 = document.getElementById('img3');
// const img4 = document.getElementById('img4');
// const stop = document.getElementById('stop');
// const play = document.getElementById('play');

/* тупиковая ветвь развития
btnStart.addEventListener('click', () => {
    // скрыть кнопку
    btnStart.style.display = 'none';
  
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    
    setTimeout(() => {
        img1.style.display = 'none';
        img2.style.display = 'block';
        img3.style.display = 'none';
        img4.style.display = 'none';
      }, 3000);
      setTimeout(() => {
          img1.style.display = 'none';
          img2.style.display = 'none';
          img3.style.display = 'block';
          img4.style.display = 'none';
        }, 6000);
    
        // запустить третью функцию setTimeout
        setTimeout(() => {
          img1.style.display = 'none';
          img2.style.display = 'none';
          img3.style.display = 'none';
          img4.style.display = 'block';
        }, 9000);

    setInterval( function() {
  
        setTimeout(() => {
      img1.style.display = 'none';
      img2.style.display = 'block';
      img3.style.display = 'none';
      img4.style.display = 'none';
    }, 3000);
    setTimeout(() => {
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'block';
        img4.style.display = 'none';
      }, 6000);
  
      // запустить третью функцию setTimeout
      setTimeout(() => {
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'none';
        img4.style.display = 'block';
      }, 9000);

    }, 12000)


  });



btnStart.addEventListener('click', () => {
    btnStart.style.display = 'none';
    showfirst();
setTimeout(function() {
    showSecond();
}, 3000);
setTimeout(function() {
    showThres();
}, 6000);
setTimeout(function() {
    showFor();
}, 9000);

setInterval(function() {
    setTimeout(function() {
        showfirst();
    }, 0);
    setTimeout(function() {
        showSecond();
    }, 3000);
    setTimeout(function() {
        showThres();
    }, 6000);
    setTimeout(function() {
        showFor();
    }, 9000);
}, 12000);

function showfirst() {
    img1.style.display = 'block';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
};

function showSecond() {
    img1.style.display = 'none';
    img2.style.display = 'block';
    img3.style.display = 'none';
    img4.style.display = 'none';
};

function showThres() {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'block';
    img4.style.display = 'none';
};

function showFor() {
    img1.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'block';
};
});


let currentImage = 0; 


stop.addEventListener('click', () => {
    clearInterval();

    sessionStorage.setItem('currentImage', currentImage.toString());
  });


*/



const btnStart = document.getElementById('start');
const images = document.querySelectorAll('.image-to-show');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const playButton = document.getElementById('play');
let currentIndex = 0;
let intervalId = null;

function showCurrentImage() {
  images[currentIndex].style.display = 'block';
}

function hideAllImages() {
  images.forEach(image => image.style.display = 'none');
}

function startSlideShow() {
  intervalId = setInterval(() => {
    hideAllImages();
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
  }, 3000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

function playSlideShow() {
  startSlideShow();
  showCurrentImage();
}

startButton.addEventListener('click', () => {
  btnStart.style.display = 'none';
  startSlideShow();
  showCurrentImage();
});

stopButton.addEventListener('click', stopSlideShow);

playButton.addEventListener('click', playSlideShow);