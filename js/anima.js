export const iconAnime = () => {
    anime({
        targets: '.icon',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 250},
            {value: 1, easing: 'easeInOutQuad', duration: 600}
          ],
          delay: anime.stagger(200, {grid: [5, 1], from: 'center'})
    });
};


