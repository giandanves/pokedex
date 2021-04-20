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

    return allMatches;
  }

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

    array.map((object) => {
      i = this.history.find((element) => element.id == object);
      if (i != undefined) {
        deletable.push(i);
      }
    });

    if (deletable.length != array.length) {
      return 'Ta errado';
    } else {
      deletable.map((object) => {
        this.history.splice(
          this.history.findIndex((element) => element == object),
          1,
        );
      });
      return deletable;
    }
  }

  addMany(array) {
    const addable = [];
    let i;

    array.map((object) => {
      i = this.history.find((element) => element.id == object.id);
      if (i == undefined) {
        addable.push(object);
      }
    });

    if (addable.length != array.length) {
      return 'Ta errado';
    } else {
      addable.map((object) => this.history.push(object));
    }
    return addable;
  }
}

export default Storage;
