class Node {
	constructor(val, priority) {
		this.value = val;
		this.priority = priority;
	}
}

class PriorityQueues {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
		return this;
	}
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2),
				parent = this.values[parentIndex];
			if (element.priority >= parent.priority) break;
			[this.values[index], this.values[parentIndex]] = [parent, element];
			index = parentIndex;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let index = 0;
		const length = this.values.length,
			element = this.values[index];
		while (true) {
			let leftChildIdx = 2 * index + 1,
				rightChildIdx = 2 * index + 2,
				leftChild,
				rightChild,
				swap = null;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) swap = leftChildIdx;
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					rightChild.priority < element.priority &&
					rightChild.priority < leftChild.priority
				)
					swap = rightChildIdx;
			}
			if (swap === null) break;
			[this.values[index], this.values[swap]] = [this.values[swap], element];
			index = swap;
		}
	}
}

let q = new PriorityQueues();
q.enqueue('concussion', 3);
q.enqueue('cold', 5);
q.enqueue('high fever', 4);
q.enqueue('bleeding', 2);
q.enqueue('fracture', 1);
