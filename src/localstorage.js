class LocalStorage {
  get history() {
    return JSON.parse(window.localStorage.getItem('history')) ?? [];
  }

  set history(history) {
    window.localStorage.setItem('history', JSON.stringify(history));
  }
  save(operation) {
    const history = this.history;
    const idExists = history.find(
      (saved) => operation.id === saved.id,
    );

    if (idExists) {
      throw new Error('This ID already exists on memory');
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
      return new Promise((resolve) =>
        resolve(
          this.history.find(
            (object) =>
              (object.id == id || id == undefined) &&
              (object.date == date || date == undefined) &&
              (object.content == content || content == undefined),
          ),
        ),
      );
    }
  }

  first() {
    return this.history.then((history) => {
      return history[history.length - 1];
    });
  }

  findAll({ id, date, content }) {
    return this.history.then((history) => {
      return history.filter(
        (object) =>
          (object.id == id || id == undefined) &&
          (object.date == date || date == undefined) &&
          (object.content == content || content == undefined),
      );
    });
  }

  delete(id) {
    return this.history.then((history) => {
      const filteredHistory = history.filter(
        (object) => object.id !== id,
      );
      const deletedItem = history.find((object) => object.id === id);
      if (!deletedItem) {
        throw new Error('id is not registered');
      }
      this.history = filteredHistory;
      return deletedItem;
    });
  }

  deleteMany(ids) {
    return this.history.then((history) => {
      const filteredHistory = history.filter(
        (object) => !ids.includes(object.id),
      );
    const deletedItems = this.history.filter((object) =>
      ids.includes(object.id),
    );
    if (deletedItems.length !== ids.length) {
      throw new Error('Some id is not registered');
    }
    this.history = filteredHistory;
    return deletedItems;
    });
  }

  addMany(array) {
    const addable = [];
    const history = this.history;

    for (let i of array) {
      if (array.filter((item) => item.id === i.id).length > 1) {
        throw new Error('Repeated IDs provided');
      }
    }
    return this.history.then((history) => {
      array.find((object) => {
        let sameIDCheck = history.find(
          (element) => element.id == object.id,
        );

        if (sameIDCheck) {
          throw new Error('Repeated IDs');
        } else {
          addable.push(object);
        }
      });

      if (addable.length != array.length) {
        throw new Error('Cannot add all the provided items');
      } else {
        addable.forEach((object) => history.push(object));
      }

      this.history = history;
      return addable;
    });
  }
}

export default LocalStorage;
