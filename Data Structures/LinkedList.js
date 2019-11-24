class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		console.log(this);
		return this;
	}
	pop() {
		let current = this.head,
			newTail = current;
		if (!this.head) return undefined;
		else {
			while (current.next) {
				newTail = current;
				current = current.next;
			}
			this.tail = newTail;
			this.tail.next = null;
		}
		this.length--;
		if (this.length == 0) {
			this.tail = null;
			this.head = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		else this.head = this.head.next;
		this.length--;
		if (this.length == 0) {
			this.tail = null;
			this.head = null;
		}
		return this.head;
	}
	unShift(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index >= this.length || index < 0) return null;
		let current = this.head;
		for (let i = 0; i < index; i++) current = current.next;
		return current;
	}

	set(val, index) {
		let foundNode = ths.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}

	insert(val, index) {
		if (index >= this.length || index < 0) return false;
		if (index == this.length) return !!this.push(val);
		if (index == 0) return !!this.unShift(val);

		let prev = this.get(index - 1);
		let newNode = new Node(val);
		let current = prev.next;
		prev.next = newNode;
		newNode.next = current;
		console.log(this);
		this.length++;
		return true;
	}
	remove(index) {
		if (index >= this.length || index < 0) return false;
		if (index == this.length) return this.pop(val);
		if (index == 0) return this.shift(val);

		let prev = this.get(index - 1);
		let removedNode = prev.next;
		prev.next = removedNode.next;
		console.log(this);
		this.length--;
		return removedNode;
	}
	display() {
		let current = this.head,
			array = [];
		while (current.next) {
			array.push(current);
			current = current.next;
		}
		array.push(current.val);
		console.log(array);
	}
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('!!');
list.pop();
