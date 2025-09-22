/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        // TODO 1 Implement 
        this.root == null ?
            this.root = node :
            this.addNodeRecursively(node, this.root)
    }

    addNodeRecursively(node, current) {
        if (current == null) return node

        node.data >= current.data ?
            current.right = this.addNodeRecursively(node, current.right) :
            current.left = this.addNodeRecursively(node, current.left)
        return current
    }

    hasNode(data) {
        // TODO 2 Implement 
        return this.hasNodeRecursively(data, this.root)
    }

    hasNodeRecursively(data, current) {
        if (current == null) return false
        if (data == current.data) return true

        return data > current.data ?
            this.hasNodeRecursively(data, current.right) :
            this.hasNodeRecursively(data, current.left)
    }
}



module.exports = { Node, Tree }
