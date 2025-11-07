import './styles/tw.css';
import './styles/main.scss';
import { initThemeToggle } from '/src/js/common/theme.js';
import {initAbout} from "@/js/app/aboutPage.js";
initThemeToggle();

let cleanupFunction = () => {};
const page = document.body.dataset.page;
const routes = {
    about:    () => import('./js/app/aboutPage.js').then(m => m.initAbout()
        .then(abortFn => {
            cleanupFunction = abortFn;
            console.log('Ініціалізація абоут пейдж заверщ. Ф-я скасування збережена. пасхалка');
        })),
};
if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка при ініціаліз аб пейдж:', err);
    });
}

// initAbout()
//     .then(abortFn => {
//         cleanupFunction = abortFn;
//         console.log("Ініціалізація абоут пейдж заверщ. Ф-я скасування збережена.");
//     })
//     .catch(error => {
//         console.error("Помилка при ініціаліз аб пейдж");
//     });