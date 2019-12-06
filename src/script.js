import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

window.addEventListener('scroll', function () {
    if (window.scrollY >= 1500) {
        document.getElementById("section2").style.cssText = `width:100%; transition: 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);`;
    }
})