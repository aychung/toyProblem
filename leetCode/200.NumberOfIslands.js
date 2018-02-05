var numIslands = function(grid) {
  var ret = 0;
  var dfs = (x,y) => {
    grid[x][y] = 0;

    if(x+1 < grid.length && grid[x+1][y] === 1) {
      dfs(x+1,y);
    }
    if(y+1 < grid[0].length && grid[x][y+1] === 1) {
      dfs(x,y+1);
    }
    if(x-1 >=0 && grid[x-1][y] === 1) {
      dfs(x-1,y);
    }
    if(y-1 >= 0 && grid[x][y-1] === 1) {
      dfs(x,y-1);
    }
  }
  for(var i = 0; i < grid.length; i++) {
    for(var j = 0; j < grid[0].length; j++) {
      if(grid[i][j] === 1) {
        ret += 1;
        dfs(i,j);
      }
    }
  }

  return ret;
}

var grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]];
console.log(numIslands(grid));

var grid2 = [[1,1,0,0,1],[1,1,0,0,1],[0,0,1,0,0],[0,0,0,1,1]];
console.log(numIslands(grid2));

console.log([1,1,1],[0,1,0],[1,1,1]);
