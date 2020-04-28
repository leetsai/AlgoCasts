// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;
        
        while(node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;

        while(node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head;
        let previous = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const node = this.getLast();
        const lastNode = new Node(data); 
        
        if (node) {
            node.next = lastNode;
        } else {
            this.head = lastNode;
        }
    }

    getAt(index) {
        let count = 0;
        let node = this.head;

        if (!node) {
            return null;
        }

        while (count < index && node) {
            count++;
            node = node.next;
        }

        return node;
    }

    removeAt(index) {
        let previous = this.getAt(index - 1);
        let next = this.getAt(index + 1);
        
        if (index === 0) {
            this.head = next;
        } else if (index === this.size() - 1) {
            previous.next = null;
        } if (!previous || !next) {
            return null;
        } else {
            previous.next = next;
        }
    }

    insertAt(data, index) {
        
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        } 
        
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };
