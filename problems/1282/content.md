## 描述

<body> <font face='Verdana,Tahoma,sans-serif,Arial,Lucida Sans,Gill Sans'> <h4>Sample Problem: Overfencing [Kolstad & Schrijvers, Spring 1999 USACO Open]</h5> <p> Farmer John created a huge maze of fences in a field. He omitted two fence segments on the edges, thus creating two ``exits'' for the maze. The maze is a `perfect' maze; you can find a way out of the maze from any point inside it. <p> Given the layout of the maze, calculate the number of steps required to exit the maze from the `worst' point in the maze (the point that is `farther' from either exit when walking optimally to the closest exit). <p> Here's what one particular W=5, H=3 maze looks like: <br> <tt><font size='2'> <br> +-+-+-+-+-+<br> |         |<br> +-+ +-+ + +<br> |     | | |<br> + +-+-+ + +<br> | |     |  <br> +-+ +-+-+-+<br> </font></tt> <h4>The Abstraction</h5> <p> Given: <ul> <li>A directed graph with nonnegative weighted edges</li> <li> A path between two vertices of a graph is any sequence of adjacent edges joining them </li> <li> The shortest path between two vertices in a graph is the path which has minimal cost, where cost is the sum of the weights of edges in the path.</li> </ul> <p> Problems often require only the cost of a shortest path not necessarily the path itself. This sample problem requires calculating only the costs of shortest paths between exits and interior points of the maze. Specifically, it requires the maximum of all of those various costs. <h4>Dijkstra's algorithm to find shortest paths in a weighted graph</h5> <p> Given: lists of vertices, edges, and edge costs, this algorithm `visits' vertices in order of their distance from the source vertex. <ul> <li> Start by setting the distance of all notes to infinity and the source's distance to 0.</li> <li> At each step, find the vertex u of minimum distance that hasn't been processed already. This vertex's distance is now frozen as the minimal cost of the shortest path to it from the source.</li> <li> Look at appending each neighbor v of vertex u to the shortest path to u. Check vertex v to see if this is a better path than the current known path to v. If so, update the best path information. </li> </ul> <p> In determining the shortest path to a particular vertex, this algorithm determines all shorter paths from the source vertex as well since no more work is required to calculate <i>all</i> shortest paths from a single source to vertices in a graph. <p> Reference: Chapter 25 of [Cormen, Leiserson, Rivest] <p> Pseudocode: <br> <tt><font size='2'> <br> # distance(j) is distance from source vertex to vertex j<br> # parent(j) is the vertex that precedes vertex j in any shortest path<br> #                  (to reconstruct the path subsequently) <br><br>  1 For all nodes i<br>  2     distance(i) = infinity          # not reachable yet<br>  3     visited(i) = False<br>  4     parent(i) = nil # no path to vertex yet <br><br>  5 distance(source) = 0 # source -> source is start of all paths<br>  6 parent(source) = nil<br>  7   8 while (nodesvisited < graphsize)<br>  9     find unvisited vertex with min distance to source; call it vertex i<br> 10     assert (distance(i) != infinity, "Graph is not connected") <br><br> 11     visited(i) = True # mark vertex i as visited <br><br>     # update distances of neighbors of i<br> 12     For all neighbors j of vertex i<br> 13         if distance(i) + weight(i,j) < distance(j) then<br> 14             distance(j) = distance(i) + weight(i,j)<br> 15             parent(j) = i<br> </font></tt> <p> Running time of this formulation is O(<i>V</i><sup>2</sup>). You can obtain O(<i>E</i> log <i>V</i>) (where <i>E</i> is the number of edges and <i>V</i> is the number of vertices) by using a heap to determine the next vertex to visit, but this is considerably more complex to code and only appreciably faster on large, sparse graphs. <h4>Sample Algorithm Execution</h5> <p> Consider the graph below, whose edge weights can be expressed two different ways: <table id="table1"> <tr> <td> <br><img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec1.gif"><br> <td>         <td> <center> <table id="table2"> <tr><td>Edge</td> <td>Weight</td></tr> <tr><td align="center">(1, 3)</td> <td align="center">5</td></tr> <tr><td align="center">(1, 4)</td> <td align="center">8</td></tr> <tr><td align="center">(3, 4)</td> <td align="center">2</td></tr> <tr><td align="center">(3, 5)</td> <td align="center">3</td></tr> <tr><td align="center">(4, 2)</td> <td align="center">3</td></tr> <tr><td align="center">(4, 6)</td> <td align="center">7</td></tr> <tr><td align="center">(5, 2)</td> <td align="center">6</td></tr> <tr><td align="center">(2, 6)</td> <td align="center">2</td></tr> </table> </center> </td><td> <center> <table id="table3"> <tr><td align="center">　</td> <td align="center">1</td> <td align="center">2</td> <td align="center">3</td> <td align="center">4</td> <td align="center">5</td> <td align="center">6</td></tr> <tr><td align="center">1</td> <td align="center">0</td> <td align="center">0</td> <td align="center">5</td> <td align="center">8</td> <td align="center">0</td> <td align="center">0</td></tr> <tr><td align="center">2</td> <td align="center">0</td> <td align="center">0</td> <td align="center">0</td> <td align="center">3</td> <td align="center">6</td> <td align="center">2</td></tr> <tr><td align="center">3</td> <td align="center">5</td> <td align="center">0</td> <td align="center">0</td> <td align="center">2</td> <td align="center">3</td> <td align="center">0</td></tr> <tr><td align="center">4</td> <td align="center">8</td> <td align="center">3</td> <td align="center">2</td> <td align="center">0</td> <td align="center">0</td> <td align="center">7</td></tr> <tr><td align="center">5</td> <td align="center">0</td> <td align="center">6</td> <td align="center">3</td> <td align="center">0</td> <td align="center">0</td> <td align="center">0</td></tr> <tr><td align="center">6</td> <td align="center">0</td> <td align="center">2</td> <td align="center">0</td> <td align="center">7</td> <td align="center">0</td> <td align="center">0</td></tr> </table> </center> </tr></table> <p> Here is the initial state of the program, both graphically and in a table: <table id="table4"> <tr><td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec2.gif" valign="top"> <td> <center> <table border="1" id="table5"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> </table> </center> </table> <table id="table6"> <tr><td width="200"> Updating the table, node 1's neighbors include nodes 3 and 4. <td> <center> <table border="1" id="table7"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>5</b></td align="center"> <td align="center"><b>1</b></td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>8</b></td align="center"> <td align="center"><b>1</b></td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> </table> </center> </table> <p> Node 3 is the closest unvisited node to the source node (smallest distance shown in column 3), so it is the next visited: <table id="table8"> <tr><td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec3.gif"> <td> <center> <table border="1" id="table9"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center"><b>T</b></td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">F</td align="center"> <td align="center">8</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> </table> </center> </table> <table id="table10"> <tr><td width="200"> Node 3's neighbors are nodes 1, 4, and 5. Updating the unvisited neighbors yields: <td> <center> <table border="1" id="table11"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">T</td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>7</b></td align="center"> <td align="center"><b>3</b></td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>8</b></td align="center"> <td align="center"><b>3</b></td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center">infinity</td align="center"> <td align="center">nil</td align="center"> </tr> </table> </center> </table> <p>Node 4 is the closest unvisited node to the source. Its neighbors are 1, 2, 3, and 6, of which only nodes 2 and 6 need be updated, since the others have already been visited: <table id="table12"> <tr> <td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec4.gif"> <td> <center> <table border="1" id="table13"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>10</b></td align="center"> <td align="center"><b>4</b></td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">T</td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center"><b>T</b></td align="center"> <td align="center">7</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">F</td align="center"> <td align="center">8</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>14</b></td align="center"> <td align="center"><b>4</b></td align="center"> </tr> </table> </center> </table> <p>Of the three remaining nodes (2, 5, and 6), node 5 is closest to the source and should be visited next. Its neighbors include nodes 3 and 2, of which only node 2 is unvisited. The distance to node 2 via node 5 is 14, which is longer than the already listed distance of 10 via node 4, so node 2 is not updated. <table id="table14"><tr><td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec5.gif"> <td> <center> <table border="1" id="table15"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">F</td align="center"> <td align="center">10</td align="center"> <td align="center">4</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">T</td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">T</td align="center"> <td align="center">7</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center"><b>T</b></td align="center"> <td align="center">8</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center">14</td align="center"> <td align="center">4</td align="center"> </tr> </table> </center> </table> <p>The closest of the two remaining nodes is node 2, whose neighbors are nodes 4, 5, and 6, of which only node 6 is unvisited. Furthermore, node 6 is now closer, so its entry must be updated: <table id="table16"><tr><td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec6.gif"> <td> <center> <table border="1" id="table17"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center"><b>T</b></td align="center"> <td align="center">10</td align="center"> <td align="center">4</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">T</td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">T</td align="center"> <td align="center">7</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">T</td align="center"> <td align="center">8</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center">F</td align="center"> <td align="center"><b>12</b></td align="center"> <td align="center"><b>2</b></td align="center"> </tr> </table> </center> </table> <p>Finally, only node 6 remains to be visited. All of its neighbors (indeed the entire graph) have now been visited: <table id="table18"><tr><td> <img src="http://10.208.83.181:80/JudgeOnline/admin/../images/1282/sp.exec7.gif"> <td> <center> <table border="1" id="table19"> <tr> <td align="center"></td align="center"> <td align="center"></td align="center"> <td align="center">Distance to</td align="center"> <td align="center"></td align="center"> </tr> <tr> <td align="center">Node</td align="center"> <td align="center">Visited</td align="center"> <td align="center">Source</td align="center"> <td align="center">Parent</td align="center"> </tr> <tr> <td align="center">1</td align="center"> <td align="center">T</td align="center"> <td align="center">0</td align="center"> <td align="center">nil</td align="center"> </tr> <tr> <td align="center">2</td align="center"> <td align="center">T</td align="center"> <td align="center">10</td align="center"> <td align="center">4</td align="center"> </tr> <tr> <td align="center">3</td align="center"> <td align="center">T</td align="center"> <td align="center">5</td align="center"> <td align="center">1</td align="center"> </tr> <tr> <td align="center">4</td align="center"> <td align="center">T</td align="center"> <td align="center">7</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">5</td align="center"> <td align="center">T</td align="center"> <td align="center">8</td align="center"> <td align="center">3</td align="center"> </tr> <tr> <td align="center">6</td align="center"> <td align="center"><b>T</b></td align="center"> <td align="center">12</td align="center"> <td align="center">2</td align="center"> </tr> </table> </center> </table> <h5> Sample Problem: Package Delivery </h5> <p> Given a set of locations, lengths of roads connecting them, and an ordered list of package dropoff locations. Find the length of the shortest route that visits each of the package dropoff locations in order. <p> Analysis: For each leg of the required path, run Dijkstra's algorithm to determine the shortest path connecting the two endpoints. If the number of legs in the journey exceeds N, instead of calculating each path, calculate the shortest path between all pairs of vertices, and then simply paste the shortest path for each leg of the journey together to get the entire journey. <h5> Extended Problem: All Pairs, Shortest Paths </h5> <p> The extended problem is to determine a table <i>a</i>, where:<br> <i>a<sub>i,j</sub></i> = length of shortest path between <i>i</i> and <i>j</i>, or infinity if <i>i</i> and <i>j</i> aren't connected. <p> This problem is usually solved as a subproblem of a larger problem, such as the package delivery problem. <p> Dijkstra's algorithm determines shortest paths for one source and all destinations in O(<i>N</i><sup>2</sup>) time. We can run it for all <i>N</i> sources in O(<i>N</i><sup>3</sup>) time. <p> If the paths do not need to be recreated, there's an even simpler solution that also runs in O(<i>N</i><sup>3</sup>) time. <h5>The Floyd-Warshall Algorithm</h5> <p> The Floyd-Warshall algorithm finds the length of the shortest paths between all pairs of vertices. It requires an adjacency matrix containing edge weights, the algorithm constructs optimal paths by piecing together optimal subpaths. <ul> <li> Note that the single edge paths might not be optimal and this is okay.</li> <li> Start with all single edge paths. The distance between two vertices is the cost of the edge between them or infinity if there is no such edge.</li> <li> For each pair of vertices <i>u</i> and <i>v</i>, see if there is a vertex <i>w</i> such that the path from <i>u</i> to <i>v</i> through <i>w</i> is shorter than the current known path from to <i>u</i> to <i>v</i>. If so, update it.</li> <li> Miraculously, if ordered properly, the process requires only one iteration. </li> <li> For more information on why this works, consult Chapter 26 of [Cormen, Leiserson, Rivest].</li> </ul> <p> Pseudocode: <br> <tt><font size='2'> <br> # dist(i,j) is "best" distance so far from vertex i to vertex j <br><br> # Start with all single edge paths.<br> For i = 1 to n do<br>     For j = 1 to n do<br>         dist(i,j) = weight(i,j) <br><br> For k = 1 to n do # k is the `intermediate' vertex<br>     For i = 1 to n do<br>         For j = 1 to n do<br>             if (dist(i,k) + dist(k,j) < dist(i,j)) then # shorter path?<br>                 dist(i,j) = dist(i,k) + dist(k,j)<br> </font></tt> <p> This algorithm runs in O(<i>V</i><sup>3</sup>) time. It requires the adjacency matrix form of the graph. <p> It's very easy to code and get right (only a few lines). <p> Even if the solution requires only the single source shortest path, this algorithm is recommended, provided the time and memory and are available (chances are, if the adjacency matrix fits in available memory, there is enough time). <h4>Problem Cues</h5> <p> If the problem wants an optimal path or the cost of a minimal route or journey, it is likely a shortest path problem. Even if a graph isn't obvious in a problem, if the problem wants the minimum cost of some process and there aren't many states, then it is usually easy to superimpose a graph on it. The big point here: shortest path = search for the minimal cost way of doing something. <h4> Extensions </h5> <p> If the graph is unweighted, the shortest path contains a minimal number of edges. A breadth first search (BFS) will solve the problem in this case, using a queue to visit nodes in order of their distance from the source. If there are many vertices but few edges, this runs much faster than Dijkstra's algorithm (see Amazing Barn in Sample Problems). <p> If negative weight edges are allowed, Dijkstra's algorithm breaks down. Fortunately, the Floyd-Warshall algorithm isn't affected so long as there are no negative cycles in the graph (if there is a negative cycle, it can be traversed arbitrarily many times to get ever `shorter' paths). So, graphs must be checked for them before executing a shortest path algorithm. <p> It is possible to add additional conditions to the definition of shortest path (for example, in the event of a tie, the path with fewer edges is shorter). So long as the distance function can be augmented along with the comparison function, the problem remains the same. In the example above, the distance function contains two values: weight and edge count. Both values would be compared if necessary. <h4> Sample Problems </h5> <h5> Graph diameter </h5> <p> Given: an undirected, unweighted, connected graph. Find two vertices which are the farthest apart. <p> Analysis: Find the length of shortest paths for all pairs and vertices, and calculate the maximum of these. <h5> Knight moves </h5> <p> Given: Two squares on an NxN chessboard. Determine the shortest sequence of knight moves from one square to the other. <p> Analysis: Let the chessboard be a graph with 64 vertices. Each vertex has at most 8 edges, representing squares 1 knight move away. <h5> Amazing Barn (abridged) [USACO Competition Round 1996] </h5> <p> Consider a very strange barn that consists of N stalls (N < 2500). Each stall has an ID number. From each stall you can reach 4 other stalls, but you can't necessarily come back the way you came. <p> Given the number of stalls and a formula for adjacent stalls, find any of the `most central' stalls. A stall is `most central' if it is among the stalls that yields the lowest average distance to other stalls using best paths. <p> Analysis: Compute all shortest paths from each vertex to determine its average distance. Any O(<i>N</i><sup>3</sup>) algorithm for computing all-pairs shortest paths would be prohibitively expensive here since N=2500. However, there are very few edges (4 per vertex), making a BFS with queue ideal. A BFS runs in O(E) time, so to compute shortest paths for all sources takes O(VE) time - about: <br> 2500 x 10,000 = 2.5 x 10<sup>6</sup> things, much more reasonable than 2500<sup>3</sup> = 1.56 x 10<sup>10</sup> <h5> Railroad Routing (abridged) [USACO Training Camp 1997, Contest 1] </h5> <p> Farmer John has decided to connect his dairy cows directly to the town pasteurizing plant by constructing his own personal railroad. Farmer John's land is laid out as a grid of one kilometer squares specified as row and column. <p> The normal cost for laying a kilometer of track is $100. Track that must gain or lose elevation between squares is charged a per-kilometer cost of $100 + $3 x meters_of_change_in_elevation. If the track's direction changes 45 degrees within a square, costs rise an extra $25; a 90 degree turn costs $40. All other turns are not allowed. <p> Given the topographic map, and the location of both John's farm and the plan, calculate the cost of the cheapest track layout. <p> Analysis: This is almost a standard shortest path problem, with grid squares as vertices and rails as edges, except that the direction a square is entered limits the ways you can exit that square. The problem: it is not possible to specify which edges exist in advance (since the path matters). <p> The solution: create eight vertices for each square, one for each direction you can enter that square. Now you can determine all of the edges in advance and solve the problem as a shortest path problem. </body>

## 输入格式

 

## 输出格式

 

## 输入样例

```plaintext
 
```

## 输出样例

```plaintext
 
```



 

## 来源

USACO教程：Shortest Paths最短路径
