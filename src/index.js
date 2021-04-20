import './style.scss';
import Storage from './storage.js';
import localStorage from './localstorage.js';

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
const five = new TestObject('22', 'ball', 'rice');

const storage = new Storage();
storage.addMany([one, two, three]);

console.log(storage);
console.log(storage.addMany([four, five]));
console.log(storage);
