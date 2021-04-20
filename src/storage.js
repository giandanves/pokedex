class Storage {
  constructor() {
    this.history = [];
  }

  save(operation) {
    let i = 0;
    this.history.forEach((saved) => {
      if (operation.id == saved.id) {
        i++;
      }
    });

    if (i > 0) {
      console.log('Ta errado');
    } else {
      this.history.push(operation);
    }
  }

  find({ id, date, content }) {
    if (
      id == undefined &&
      date == undefined &&
      content == undefined
    ) {
      return null;
    } else {
      return this.history.find(
        (object) =>
          (object.id == id || id == undefined) &&
          (object.date == date || date == undefined) &&
          (object.content == content || content == undefined),
      );
    }
  }

  first() {
    return this.history[this.history.length - 1];
  }

  findAll({ id, date, content }) {
    const allMatches = [];
    this.history.map((object) => {
      if (
        (object.id == id || id == undefined) &&
        (object.date == date || date == undefined) &&
        (object.content == content || content == undefined)
      ) {
        allMatches.push(object);
      }
    });

  delete() {}

  delete(id) {
    const i = this.history.findIndex((object) => object.id == id);
    if (i != -1) {
      return this.history.splice(i, 1);
    } else {
      return 'Ta errado';
    }
  }

  deleteMany(array) {
    const deletable = [];
    let i;

// find() {}

//first() {}

// findAll() {}

//delete() {}

//  deleteMany() {}

//addMany() {}
//}

export default Storage;
