class LocalStorage {
  get history() {
    return JSON.parse(window.localStorage.getItem('history')) ?? [];
  }

  set history(history) {
    window.localStorage.setItem('history', JSON.stringify(history));
  }
  save(operation) {
    let i = 0;
    const history = this.history;
    history.forEach((saved) => {
      if (operation.id == saved.id) {
        i++;
      }
    });

    if (i > 0) {
      console.log('Ta errado');
    } else {
      history.push(operation);
      this.history = history;
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
    const history = this.history;
    let i = history.findIndex((object) => object.id == id);
    if (i != -1) {
      let deleted = history.splice(i, 1);
      this.history = history;
      return deleted;
    } else {
      return 'Ta errado';
    }
  }

  deleteMany(array) {
    const deletable = [];
    const history = this.history;
    let i;

    array.map((object) => {
      i = history.find((element) => element.id == object);
      if (i != undefined) {
        deletable.push(i);
      }
    });

    if (deletable.length != array.length) {
      return 'Ta errado';
    } else {
      deletable.map((object) => {
        history.splice(
          history.findIndex((element) => element == object),
          1,
        );
      });

      this.history = history;

      return deletable;
    }
  }

  addMany(array) {
    const addable = [];
    let repeatCheck = false;
    const history = this.history;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (i !== j) {
          if (array[i].id === array[j].id) {
            repeatCheck = true;
            break;
          }
        }
      }
    }

    array.map((object) => {
      let sameIDCheck = history.find(
        (element) => element.id == object.id,
      );

      if (sameIDCheck == undefined) {
        addable.push(object);
      }
    });

    if (addable.length != array.length || repeatCheck == true) {
      return 'Ta errado';
    } else {
      addable.map((object) => history.push(object));
    }

    this.history = history;
    return addable;
  }
}

export default LocalStorage;
