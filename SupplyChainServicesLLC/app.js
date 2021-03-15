const banner = document.querySelector('.banner')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const hamburger = document.querySelector('.hamburger')
const content = document.querySelector('.content')

const tl = new TimelineMax()

tl.fromTo(
    banner,
    1,
    { height: '0%' },
    { height: '80%', ease: Power2.easeInOut }
)
    .fromTo(
        banner,
        1.2,
        { width: '100%' },
        { width: '100%', ease: Power2.easeInOut }
    )
    .fromTo(
        slider,
        1.2,
        { x: '-100%' },
        { x: '0%', ease: Power2.easeInOut },
        '-=1.2'
    )

    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=0.5')
    .fromTo(content, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, '-=1')
