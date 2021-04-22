import './style.scss';
import LocalStorage from './localstorage.js';
const testObject = (id, date, content) => {
  if (id == undefined || date == undefined || content == undefined) {
    throw new Error('Insufficient parameters');
  } else {
    return { id, date, content };
  }
};

localStorage.clear();
const one = testObject('15', '25', '25+5=30');
const storage = new LocalStorage();
storage.save(one);

storage.find({ date: '25' }).then((r) => console.log(r));
