const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rout = null;
  }
  root() {
    return this.rout;
  }
  add(data) {
    const addNode = (currentNode, new_node) => {
      if (new_node.data < currentNode.data) {
        if (currentNode.leftNode === null) {
          currentNode.leftNode = new_node;
        } else {
          addNode(currentNode.leftNode, new_node);
        }
      } else {
        if (currentNode.rightNode === null) {
          currentNode.rightNode = new_node;
        } else {
          addNode(currentNode.rightNode, new_node);
        }
      }
    };

    const new_node = { data, leftNode: null, rightNode: null };

    if (this.rout === null) {
      this.rout = new_node;
    } else {
      addNode(this.rout, new_node);
    }
  }

  has(data) {
    const hasNode = (currentNode, data) => {
      if (currentNode.data === data) return true;

      if (data < currentNode.data) {
        if (currentNode.leftNode === null) return false;

        return hasNode(currentNode.leftNode, data);
      } else {
        if (currentNode.rightNode === null) return false;

        return hasNode(currentNode.rightNode, data);
      }
    };

    if (this.rout === null) return false;

    return hasNode(this.rout, data);
  }

  find(data) {
    const findNode = (currentNode, data) => {
      if (data < currentNode.data) {
        if (currentNode.leftNode === null) return null;

        return findNode(currentNode.leftNode, data);
      }

      if (data > currentNode.data) {
        if (currentNode.rightNode === null) return null;

        return findNode(currentNode.rightNode, data);
      }

      return currentNode;
    };

    if (this.rout === null) return null;

    return findNode(this.rout, data);
  }

  remove(data) {
    const removeNode = (currentNode, data) => {
      if (currentNode === null) return null;

      if (data < currentNode.data) {
        currentNode.leftNode = removeNode(currentNode.leftNode, data);

        return currentNode;
      }

      if (data > currentNode.data) {
        currentNode.rightNode = removeNode(currentNode.rightNode, data);

        return currentNode;
      }

      if (currentNode.leftNode === null && currentNode.rightNode === null) {
        currentNode = null;

        return currentNode;
      }

      if (currentNode.leftNode === null) {
        currentNode = currentNode.rightNode;

        return currentNode;
      }

      if (currentNode.rightNode === null) {
        currentNode = currentNode.leftNode;

        return currentNode;
      }

      const max = n => n.rightNode === null ? n : max(n.rightNode);

      const maxFromLeft = max(currentNode.leftNode);
      currentNode.data = maxFromLeft.data;

      currentNode.leftNode = removeNode(currentNode.leftNode, currentNode.data);

      return currentNode;
    };

    this.rout = removeNode(this.rout, data);
  }

  min() {
    const minValue = currentNode => {
      if (currentNode.leftNode === null) return currentNode.data;

      return minValue(currentNode.leftNode);
    };

    if (this.rout === null) return null;

    return minValue(this.rout);
  }

  max() {
    const maxValue = currentNode => {
      if (currentNode.rightNode === null) return currentNode.data;

      return maxValue(currentNode.rightNode);
    };

    if (this.rout === null) return null;

    return maxValue(this.rout);
  }
}

module.exports = {
  BinarySearchTree
};