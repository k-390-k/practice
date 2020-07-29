document.addEventListener('DOMContentLoaded', function () {


const els = document.querySelectorAll('.animate-title');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const ta = new TextAnimation('.animate-title');
            ta.animate();
            observer.unobserve(entry.target);
        } else {
            
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
    threshold: [0, 0.5, 1]
};
const io = new IntersectionObserver(cb, options);
els.forEach(el => io.observe(el));


});
