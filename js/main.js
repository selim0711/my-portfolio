window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < window.innerHeight) {
            reveal.classList.add('reveal-visible');
        }
    });
});

const toggleSwitch = document.querySelector('.dark-mode-toggle');

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});