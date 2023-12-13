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
  };
}
