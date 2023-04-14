const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const addNode = (currentNode, newNode) => {
      if (newNode.data < currentNode.data) {
        if (currentNode.leftNode === null) {
          currentNode.leftNode = newNode;
        } else {
          addNode(currentNode.leftNode, newNode);
        }
      } else {
        if (currentNode.rightNode === null) {
          currentNode.rightNode = newNode;
        } else {
          addNode(currentNode.rightNode, newNode);
        }
      }
    };

    const newNode = { data, leftNode: null, rightNode: null };

    if (this._root === null) {
      this._root = newNode;
    } else {
      addNode(this._root, newNode);
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

    if (this._root === null) return false;

    return hasNode(this._root, data);
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

    if (this._root === null) return null;

    return findNode(this._root, data);
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

    this._root = removeNode(this._root, data);
  }

  min() {
    const minValue = currentNode => {
      if (currentNode.leftNode === null) return currentNode.data;

      return minValue(currentNode.leftNode);
    };

    if (this._root === null) return null;

    return minValue(this._root);
  }

  max() {
    const maxValue = currentNode => {
      if (currentNode.rightNode === null) return currentNode.data;

      return maxValue(currentNode.rightNode);
    };

    if (this._root === null) return null;

    return maxValue(this._root);
  }
}

module.exports = {
  BinarySearchTree
};