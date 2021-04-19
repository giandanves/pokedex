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

  first() {}

  findAll() {}

  delete() {}

  deleteMany() {}

  addMany() {}
}

class TestObject {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class localStorage {
  save() {}

  find() {}

  first() {}

  findAll() {}

  delete() {}

  deleteMany() {}

  addMany() {}
}
