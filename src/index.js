module.exports = function solveSudoku(matrix) {
    function suggest(row,col) {
        var result = [];
        var freedom = {
            row: Math.floor(row/3)*3,
            col: Math.floor(col/3)*3,
        };

        for (var i = 0; i < 9; i++) {
            result.push([matrix[row][i], matrix[i][col], matrix[freedom.row + i % 3][freedom.col + Math.floor(i / 3)]])
        }
        return result;
    }

    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {
                var suggestions = suggest(row, col);
                for (var suggestion of suggestions) {
                    matrix[row][col] = suggestion;
                    solveSudoku(matrix);
                }
            }
        }
    }
    return matrix;
}
