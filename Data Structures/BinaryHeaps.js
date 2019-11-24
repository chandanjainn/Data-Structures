class MaxBinaryHeap {
	constructor() {
		this.values = [55, 39, 41, 18, 27, 12, 33];
	}
	insert(val) {
		this.values.push(val);
		this.bubbleUp();
		return this;
	}
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2),
				parent = this.values[parentIndex];
			if (element <= parent) break;
			[this.values[index], this.values[parentIndex]] = [parent, element];
			index = parentIndex;
		}
	}
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let index = 0;
		const length = this.values.length,
			element = this.values[index];
		while (true) {
			let leftChildIdx = 2 * index + 1,
				rightChildIdx = 2 * index + 2,
				leftChild,rightChild,swap = null;
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) swap = leftChildIdx;
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (rightChild > element && rightChild > leftChild)
					swap = rightChildIdx;
			}
			if (swap === null) break;
			[this.values[index], this.values[swap]] = [this.values[swap], element];
			index = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
// heap.insert(55);
