class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(currentVertex) {
		if (!this.adjacencyList[currentVertex])
			this.adjacencyList[currentVertex] = [];
	}
	addEdge(currentVertex1, currentVertex2) {
		this.adjacencyList[currentVertex1].push(currentVertex2);
		this.adjacencyList[currentVertex2].push(currentVertex1);
	}
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
	}
	removeVertex(vertex) {
		for (const v in this.adjacencyList) {
			this.adjacencyList[v] = this.adjacencyList[v].filter(v => v !== vertex);
		}
		delete this.adjacencyList[vertex];
	}
	depthFirstRecursive(start) {
		let results = [],
			visited = {},
			adjacencyList = this.adjacencyList;
		function dfs(currentVertex) {
			if (!currentVertex) return null;
			results.push(currentVertex);
			visited[currentVertex] = true;
			if (adjacencyList[currentVertex].length === 0) return results;
			else {
				adjacencyList[currentVertex].forEach(v => {
					if (!visited[v]) return dfs(v);
				});
			}
		}
		dfs(start);
		return results;
	}
	depthFirstIterative(start) {
		let stack = [start],
			results = [],
			visited = {},
			currentVertex;
		visited[start] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			results.push(currentVertex);
			//use slice().reverse() for R->L Traversal in the next step
			this.adjacencyList[currentVertex].forEach(neighbour => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					stack.push(neighbour);
				}
			});
		}
		return results;
	}

	breadthFirstTraversal(start) {
		let queue = [start],
			visited = {},
			result = [],
			currentVertex;
		visited[start] = true;
		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach(neighbour => {
				if (!visited[neighbour]) {
					queue.push(neighbour);
					visited[neighbour] = true;
				}
			});
		}
		return result;
	}
}

// @ts-ignore
let graph = new Graph();
// graph.addVertex('Delhi');
// graph.addVertex('Pune');
// graph.addVertex('Mumbai');
// graph.addVertex('Bangalore');
// graph.addEdge('Delhi', 'Mumbai');
// graph.addEdge('Delhi', 'Pune');
// graph.addEdge('Delhi', 'Bangalore');
// graph.addEdge('Mumbai', 'Bangalore');
// graph.addEdge('Pune', 'Bangalore');
// graph.addEdge('Pune', 'Mumbai');

var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
	graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
//graph.depthFirstRecursive('A');
//graph.breadthFirstTraversal('A');
//graph.depthFirstIterative('A');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
