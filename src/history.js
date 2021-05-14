import './style/style.scss';
import checkStorageIsFilled from './scripts/controllers/history.js';
import LocalStorage from './scripts/storage/localstorage.js';

let storage = new LocalStorage();
checkStorageIsFilled(storage);
