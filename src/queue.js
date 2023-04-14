const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(ell) {
    const newEll = new ListNode(ell);
    if (!this.head) {
      this.head = newEll;
      this.tail = newEll;
    } else {
      this.tail.next = newEll;
      this.tail = newEll;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const newvalue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return newvalue;
  }

  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
