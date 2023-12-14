/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  };
}

const linkedList = createLinkedList();
linkedList.append(10);
console.log(linkedList);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkbGlzdHMyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU5vZGUoZGF0YSA9IG51bGwsIG5leHQgPSBudWxsKSB7XG4gIGNvbnN0IG5vZGUgPSB7XG4gICAgZGF0YSxcbiAgICBuZXh0LFxuICB9O1xuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZkhlYWQobm9kZSkge1xuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGhyb3dOb0hlYWRFcnJvcigpIHtcbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTGlua2VkIExpc3QnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rZWRMaXN0KGhlYWQgPSBudWxsKSB7XG4gIHJldHVybiB7XG4gICAgaGVhZCxcblxuICAgIGFwcGVuZCh2YWx1ZSkge1xuICAgICAgY29uc3QgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgY2hlY2tJZkhlYWQuY2FsbCh0aGlzLCBuZXdOb2RlKTtcblxuICAgICAgbGV0IHRtcCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlICh0bXAubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICB0bXAgPSB0bXAubmV4dDtcbiAgICAgIH1cbiAgICAgIHRtcC5uZXh0ID0gbmV3Tm9kZTtcbiAgICB9LFxuXG4gICAgcHJlcGVuZCh2YWx1ZSkge1xuICAgICAgY29uc3QgbmV3Tm9kZSA9IGNyZWF0ZU5vZGUodmFsdWUpO1xuICAgICAgY2hlY2tJZkhlYWQuY2FsbCh0aGlzLCBuZXdOb2RlKTtcblxuICAgICAgbmV3Tm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICB9LFxuXG4gICAgc2l6ZSgpIHtcbiAgICAgIGxldCBzaXplID0gMDtcbiAgICAgIHRocm93Tm9IZWFkRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmhlYWQ7XG4gICAgICB3aGlsZSAodG1wICE9PSBudWxsKSB7XG4gICAgICAgIHNpemUgKz0gMTtcbiAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhzaXplKTtcbiAgICB9LFxuXG4gICAgbGlzdEhlYWQoKSB7XG4gICAgICB0aHJvd05vSGVhZEVycm9yLmNhbGwodGhpcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYSk7XG4gICAgfSxcblxuICAgIHRhaWwoKSB7XG4gICAgICB0aHJvd05vSGVhZEVycm9yLmNhbGwodGhpcyk7XG4gICAgICBsZXQgdG1wID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIHRtcCA9IHRtcC5uZXh0O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codG1wKTtcbiAgICB9LFxuXG4gICAgYXQoaW5kZXgpIHtcbiAgICAgIHRocm93Tm9IZWFkRXJyb3IuY2FsbCh0aGlzKTtcbiAgICAgIGxldCB0bXAgPSB0aGlzLmhlYWQ7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgIHdoaWxlICh0bXAgIT09IG51bGwgJiYgY3VycmVudEluZGV4ID49IGluZGV4KSB7XG4gICAgICAgIHRtcCA9IHRtcC5uZXh0O1xuICAgICAgICBjdXJyZW50SW5kZXggKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICYmIHRtcCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0bXAuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IG91dCBvZiBib3VuZHMnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcG9wKCkge1xuICAgICAgdGhyb3dOb0hlYWRFcnJvci5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMuaGVhZC5uZXh0KSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHRtcCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlICh0bXAubmV4dC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIHRtcCA9IHRtcC5uZXh0O1xuICAgICAgfVxuICAgICAgdG1wLm5leHQgPSBudWxsO1xuICAgIH0sXG5cbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgdGhyb3dOb0hlYWRFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgbGV0IHRtcCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlICh0bXAubmV4dCAhPT0gbnVsbCAmJiB0bXAuZGF0YSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICB9XG4gICAgICBpZiAodG1wICE9PSBudWxsICYmIHRtcC5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgZmluZCh2YWx1ZSkge1xuICAgICAgdGhyb3dOb0hlYWRFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgbGV0IHRtcCA9IHRoaXMuaGVhZDtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICB3aGlsZSAodG1wLmRhdGEgIT09IHZhbHVlICYmIHRtcC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIHRtcCA9IHRtcC5uZXh0O1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKHRtcC5kYXRhID09PSB2YWx1ZSAmJiB0bXAgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgdGhyb3dOb0hlYWRFcnJvci5jYWxsKHRoaXMpO1xuICAgICAgY29uc3Qgb2JqZWN0c0FycmF5ID0gW107XG4gICAgICBsZXQgdG1wID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKHRtcCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdHJpbmdEYXRhID0gdG1wLmRhdGEudG9TdHJpbmcoKTtcbiAgICAgICAgb2JqZWN0c0FycmF5LnB1c2goc3RyaW5nRGF0YSk7XG4gICAgICAgIHRtcCA9IHRtcC5uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdHNBcnJheS5qb2luKCcnKTtcbiAgICB9LFxuICAgIC8vIGV4dHJhIGNyZWRpdFxuICAgIGluc2VydCh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHRocm93Tm9IZWFkRXJyb3IuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZGV4IG11c3QgYmUgbm9uLW5lZ2F0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCB0bXAgPSB0aGlzLmhlYWQ7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcblxuICAgICAgd2hpbGUgKHRtcCAhPT0gbnVsbCAmJiBjdXJyZW50SW5kZXggPCBpbmRleCAtIDEpIHtcbiAgICAgICAgdG1wID0gdG1wLm5leHQ7XG4gICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudEluZGV4ID09PSBpbmRleCAtIDEgJiYgdG1wICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBjcmVhdGVOb2RlKHZhbHVlLCB0bXAubmV4dCk7XG4gICAgICAgIHRtcC5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5kZXggb3V0IG9mIGJvdW5kcycpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IGxpbmtlZExpc3QgPSBjcmVhdGVMaW5rZWRMaXN0KCk7XG5saW5rZWRMaXN0LmFwcGVuZCgxMCk7XG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==