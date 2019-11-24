class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}
class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(currentVertex) {
		if (!this.adjacencyList[currentVertex])
			this.adjacencyList[currentVertex] = [];
	}
	addEdge(v1, v2, weight) {
		this.adjacencyList[v1].push({ node: v2, weight });
		this.adjacencyList[v2].push({ node: v1, weight });
	}
	dijkstra(start, end) {
		const nodes = new PriorityQueue(),
			distances = {},
			previous = {},
			path = [];
		let smallest;
		for (const vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === end) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (const neighbour in this.adjacencyList[smallest]) {
					let nextNode = this.adjacencyList[smallest][neighbour],
						candidate = distances[smallest] + nextNode.weight,
						nextNeighbour = nextNode.node;
					if (candidate < distances[nextNeighbour]) {
						distances[nextNeighbour] = candidate;
						previous[nextNeighbour] = smallest;
						nodes.enqueue(nextNeighbour, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse();
	}
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.dijkstra('A', 'E');
