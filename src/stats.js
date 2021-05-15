import './style/style.scss';
import LocalStorage from './scripts/storage/localstorage.js';
import updateStats from './scripts/controllers/stats.js';

let storage = new LocalStorage();
updateStats(storage);
