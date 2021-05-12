class inMemory {
  constructor() {
    this.history = [];
  }

  get getHistory() {
    return new Promise((resolve) => resolve(this.history));
  }
  save = (operation) => {
    return this.getHistory.then((history) => {
      const idExists = history.find(
        (saved) => operation.id === saved.id,
      );

      if (idExists) {
        throw new Error('This ID already exists on memory');
      } else {
        this.history.push(operation);
        return operation;
      }
    });
  };

  find = ({ id, date, content }) => {
    if (
      id == undefined &&
      date == undefined &&
      content == undefined
    ) {
      return null;
    } else {
      return this.getHistory.then((history) => {
        return history.find(
          (object) =>
            (object.id == id || id == undefined) &&
            (object.date == date || date == undefined) &&
            (object.content == content || content == undefined),
        );
      });
    }
  };

  first = () => {
    return this.getHistory.then((history) => {
      return history[history.length - 1];
    });
  };

  findAll = ({ id, date, content }) => {
    return this.getHistory.then((history) => {
      return history.filter(
        (object) =>
          (object.id == id || id == undefined) &&
          (object.date == date || date == undefined) &&
          (object.content == content || content == undefined),
      );
    });
  };

  delete = (id) => {
    return this.getHistory.then((history) => {
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
  };
  deleteMany = (ids) => {
    return this.getHistory.then((history) => {
      const filteredHistory = history.filter(
        (object) => !ids.includes(object.id),
      );
      const deletedItems = history.filter((object) =>
        ids.includes(object.id),
      );
      if (deletedItems.length !== ids.length) {
        throw new Error('Some id is not registered');
      }
      this.history = filteredHistory;
      return deletedItems;
    });
  };

  addMany = (array) => {
    const addable = [];

    for (let i of array) {
      if (array.filter((item) => item.id === i.id).length > 1) {
        throw new Error('Repeated IDs provided');
      }
    }
    return this.getHistory.then((history) => {
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
  };
}

export default inMemory;
