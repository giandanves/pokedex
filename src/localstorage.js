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

  find() {}

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
