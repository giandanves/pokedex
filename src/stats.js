import './style/style.scss';
import LocalStorage from './scripts/storage/localstorage.js';
import renderStatsPage from './scripts/controllers/stats.js';

let storage = new LocalStorage();
renderStatsPage(storage);
