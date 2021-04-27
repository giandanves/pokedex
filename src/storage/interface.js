import { Interface, type } from 'implement-js';

const StorageInterface = Interface('Storage')(
  {
    save: type('function'),
    find: type('function'),
    first: type('function'),
    findAll: type('function'),
    delete: type('function'),
    deleteMany: type('function'),
    addMany: type('function'),
  },
  {
    error: true,
  },
);
export default StorageInterface;
