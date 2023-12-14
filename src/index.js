function createNode(data = null, next = null) {
  const node = {
    data,
    next,
  };
  return node;
}

function checkIfHead(node) {
  if (!this.head) {
    this.head = node;
  }
}

function throwNoHeadError() {
  if (!this.head) {
    throw new Error('Invalid Linked List');
  }
}

function createLinkedList(head = null) {
  return {
    head,

    append(value) {
      const newNode = createNode(value);
      checkIfHead.call(this, newNode);

      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = newNode;
    },

    prepend(value) {
      const newNode = createNode(value);
      checkIfHead.call(this, newNode);

      newNode.next = this.head;
      this.head = newNode;
    },

    size() {
      let size = 0;
      throwNoHeadError.call(this);
      let tmp = this.head;
      while (tmp !== null) {
        size += 1;
        tmp = tmp.next;
      }
      console.log(size);
    },

    listHead() {
      throwNoHeadError.call(this);
      console.log(this.hea);
    },

    tail() {
      throwNoHeadError.call(this);
      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      console.log(tmp);
    },

    at(index) {
      throwNoHeadError.call(this);
      let tmp = this.head;
      let currentIndex = 0;
      while (tmp !== null && currentIndex >= index) {
        tmp = tmp.next;
        currentIndex += 1;
      }
      if (currentIndex === index && tmp !== null) {
        console.log(tmp.data);
      } else {
        throw new Error('Index out of bounds');
      }
    },

    pop() {
      throwNoHeadError.call(this);

      if (!this.head.next) {
        this.head = null;
        return;
      }

      let tmp = this.head;
      while (tmp.next.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = null;
    },

    contains(value) {
      throwNoHeadError.call(this);
      let tmp = this.head;
      while (tmp.next !== null && tmp.data !== value) {
        tmp = tmp.next;
      }
      if (tmp !== null && tmp.data === value) {
        return true;
      }
      return false;
    },

    find(value) {
      throwNoHeadError.call(this);
      let tmp = this.head;
      let index = 0;
      while (tmp.data !== value && tmp.next !== null) {
        tmp = tmp.next;
        index += 1;
      }
      if (tmp.data === value && tmp !== null) {
        return index;
      }
      return null;
    },

    toString() {
      throwNoHeadError.call(this);
      const objectsArray = [];
      let tmp = this.head;
      while (tmp !== null) {
        const stringData = tmp.data.toString();
        objectsArray.push(stringData);
        tmp = tmp.next;
      }
      return objectsArray.join('');
    },
    // extra credit
    insert(value, index) {
      throwNoHeadError.call(this);

      if (index < 0) {
        throw new Error('Index must be non-negative');
      }

      let tmp = this.head;
      let currentIndex = 0;

      while (tmp !== null && currentIndex < index - 1) {
        tmp = tmp.next;
        currentIndex += 1;
      }

      if (currentIndex === index - 1 && tmp !== null) {
        const newNode = createNode(value, tmp.next);
        tmp.next = newNode;
      } else {
        throw new Error('Index out of bounds');
      }
    },
    removeAt(index) {
      throwNoHeadError.call(this);

      if (index < 0) {
        throw new Error('Index must be non-negative');
      }

      if (index === 0) {
        this.head = this.head.next;
        return;
      }

      let tmp = this.head;
      let currentIndex = 0;

      while (tmp !== null && currentIndex + 1 !== index) {
        tmp = tmp.next;
        currentIndex += 1;
      }

      if (tmp !== null && tmp.next !== null && currentIndex + 1 === index) {
        tmp.next = tmp.next.next;
      } else {
        throw new Error('Index not contained in list');
      }
    },
  };
}
