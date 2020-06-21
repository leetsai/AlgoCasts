// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, null];
    const ans = [0];

    while (arr.length > 1) {
        let node = arr.shift();
        if (node === null) {
            ans.push(0);
            arr.push(null);
        } else {
            arr.push(...node.children);
            ans[ans.length - 1]++;
        }
    }

    return ans;
}

module.exports = levelWidth;
