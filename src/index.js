function createNode(data = null, next = null) {
  const node = {
    data,
    next,
  };
  return node;
}

function createLinkedList(head = null) {
  return {
    head: null,

    append(value) {
      const newNode = createNode(value);
      if (!this.head) {
        this.head = newNode;
      }

      let tmp = this.head;
      while (tmp.next !== null) {
        tmp = tmp.next;
      }
      tmp.next = newNode;
    },
  };
}
