/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

let adj=[], vis=[];

function dfs(node, target) {
        vis[node]=1;
        let ans=node == target;
        for (let i in adj[node]) if (!vis[adj[node][i]]) ans|=dfs(adj[node][i], target);
        return ans;
}

var validPath = function(n, edges, source, destination) {
        for (let i=0; i<n; i++) adj[i]=[], vis[i]=0;
        for (let i in edges) {
                adj[edges[i][0]].push(edges[i][1]);
                adj[edges[i][1]].push(edges[i][0]);
        }

        return dfs(source, destination);
};

module.exports = validPath;