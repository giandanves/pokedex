import './style.scss';

import LocalStorage from './localstorage.js';

class TestObject {
  constructor(id, date, content) {
    this.id = id;
    this.date = date;
    this.content = content;
  }
}

const one = new TestObject('15', '25', 'bola');
const two = new TestObject('16', '25', 'rato');
const three = new TestObject('17', 'bola', 'arroz');
const four = new TestObject('22', 'bola', 'arroz');

const storage = new LocalStorage();
localStorage[storage] = JSON.stringify(storage);
storage.save(one);
storage.save(two);
storage.save(three);
storage.save(four);

console.log(storage.findAll({ date: '25' }));
