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

  deleteMany() {}

  addMany() {}
}

//class localStorage {
//save() {}

// find() {}

//first() {}

// findAll() {}

//delete() {}

//  deleteMany() {}

//addMany() {}
//}

export default Storage;
