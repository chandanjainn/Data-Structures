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
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);
