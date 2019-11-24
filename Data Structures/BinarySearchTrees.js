class Node {
	constructor(val) {
		this.left = null;
		this.right = null;
		this.value = val;
	}
}

class BinarySearchTrees {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value),
			current = this.root;
		if (current == null) {
			current = newNode;
			return this;
		}
		while (current) {
			if (value === current.value) return undefined;
			if (value > current.value) {
				if (current.right == null) {
					current.right = newNode;
					return this;
				} else current = current.right;
			} else {
				if (current.left == null) {
					current.left = newNode;
					return this;
				} else current = current.left;
			}
		}
	}

	find(value) {
		if (this.root === null) return 'Not Found';
		let current = this.root,
			found = false;
		while (current && !found) {
			if (value > current.value) current = current.right;
			else if (value < current.value) current = current.left;
			else found = true;
		}
		if (!found) return 'Not Found';
		return current;
	}

	BFS() {
		let current = this.root;
		if (current === null) return 'Not Found';
		let visited = [],
			queue = [current];
		while (queue.length) {
			current = queue.shift();
			visited.push(current.value);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return visited;
	}

	DFSPreOrder() {
		let current = this.root;
		if (current === null) return 'Not Found';
		let visited = [];
		function traverse(node) {
			visited.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(current);
		return visited;
	}

	DFSPostOrder() {
		let current = this.root;
		if (current === null) return 'Not Found';
		let visited = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.value);
		}
		traverse(current);
		return visited;
	}
	DFSInOrder() {
		let current = this.root;
		if (current === null) return 'Not Found';
		let visited = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			visited.push(node.value);
			if (node.right) traverse(node.right);
		}
		traverse(current);
		return visited;
	}
}
let tree = new BinarySearchTrees();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
tree.root.right.left = new Node(12);
