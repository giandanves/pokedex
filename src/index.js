import './style.scss';

const testObject = (id, date, content) => {
  if (id == undefined || date == undefined || content == undefined) {
    throw new Error('Insufficient parameters');
  } else {
    return { id, date, content };
  }
};

const one = testObject('15', '25', '25+5=30');
console.log(one);
