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

localStorage.clear();

const storage = new LocalStorage();

storage.save(one);
storage.addMany([two, three]);
console.log(storage.first());
console.log(storage.find({ id: '16' }));
console.log(storage.findAll({ date: '27' }));
console.log(storage.deleteMany(['15', '17']));
