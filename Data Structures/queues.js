class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Queue {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	enqueue(value) {
		let newNode = new Node(value);
		if (this.length == 0) this.head = newNode;
		else this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	dequeue() {
		if (this.length == 0) return null;
		if (this.length == 1) {
			this.head = null;
			this.tail = null;
		} else this.head = this.head.next;
		this.length--;
		return this;
	}
}

let q = new Queue();
