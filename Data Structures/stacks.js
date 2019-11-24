class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class Stacks {
	constructor() {
		this.top = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (this.top) newNode.next = this.top;
		this.top = newNode;
		this.size++;
		return this.top;
	}

	pop() {
		if (this.size == 0) return null;
		if (this.size == 1) this.top = null;
		else this.top = this.top.next;
		this.size--;
		return this.top;
	}
	print() {
		if (this.size == 0) console.log('Stack Underflow');
		else {
			let current = this.top;
			while (current) {
				console.log(current.value);
				current = current.next;
			}
		}
	}
}

let stack = new Stacks();
