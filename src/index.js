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
  };
}
