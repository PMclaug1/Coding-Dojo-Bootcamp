class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
      this.left = null;
      /** @type {BSTNode|null} */
      this.right = null;
    }
  }



  /**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
      /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
      this.root = null;
    }

    


      /**
   * Determines if this tree is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root == null;
  }


  /**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @returns {BinarySearchTree} This tree.
 */
  insert(newVal) {
    const newNode = new BSTNode(newVal)

    if (this.isEmpty()) {
        // Inserting ROOT
        console.log(`Inserting ${newVal} as the ROOT`)
        this.root = newNode
    } else {
        let curr = this.root
        // Traverse the list while either left or right is not null
        // When it is null we have reached the node where the new node is to be inserted
        while (curr.left !== null && curr.right !== null) {
            // Traverse RIGHT
            if (newVal > curr.data) {
                // console.log("Traversing to the RIGHT of ", curr.data)
                curr = (curr.right !== null) ? curr.right : curr
            } else {
                // Traverse LEFT
                // console.log("Traversing to the LEFT of ", curr.data)
                curr = (curr.left !== null) ? curr.left : curr
            }
        }
        // Insert RIGHT
        if (newVal > curr.data) {
            console.log(`Inserting ${newVal} to the RIGHT of ${curr.data}`)
            curr.right = newNode
        } else {
            // Insert LEFT
            console.log(`Inserting ${newVal} to the LEFT of ${curr.data}`)
            curr.left = newNode
        }
    }
    return this
};

min(current = this.root) { 
    if (!this.isEmpty()) {
        if (current.left === null){
            return current.data
        }
        return this.min(current.left)
    }
};

max(current = this.root) {
    if (!this.isEmpty()) {
        if (current.right === null){
            return current.data
        }
        return this.min(current.right)
    }
};

/**
 * Determines if this tree contains the given searchVal.
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
contains(searchVal) {
    // Set root
    if (this.isEmpty()) {
        return false;
    }
    // Traverse BST
    let pointer = this.root
    while (pointer) {
        if (pointer.data == searchVal) { // Found it
            return true
        }
        searchVal < pointer.data ? pointer = pointer.left : pointer = pointer.right // Continue...
    }
    return false;
};

/**
 * Determines if this tree contains the given searchVal.
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
containsRecursive(searchVal, current = this.root) {
    // Base case: if we get the end and current is null or list is empty
    if (!current) { 
        return false
    }
    else if (searchVal === current.data) { // Found it
        return true
    }
    // Didn't find it and the list is not empty. Traverse..
    else {
        if (searchVal < current.data) {
            current = current.left  // Traverse left...
            return this.containsRecursive(searchVal, current)
        } else {
            current = current.right // Traverse right...
            return this.containsRecursive(searchVal, current)
        }
    }
}}
    class BST {

    /**
 * Calculates the range (max - min) from the given startNode.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} startNode The node to start from to calculate the range.
 * @returns {number|null} The range of this tree or a sub tree depending on if the
 *    startNode is the root or not.
 */
    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()) {
            // Inserting ROOT
            console.log(`Inserting ${newVal} as the ROOT`)
            this.root = new BSTNode(newVal)
        } else {
            if (curr) {
                // Traverse RIGHT
                if (newVal > curr.data) {
                    // console.log("Traversing to the RIGHT of ", curr.data)
                    if (curr.right !== null) {
                        this.insertRecursive(newVal, curr.right)
                    } else {
                        // Insert RIGHT
                        console.log(`Inserting ${newVal} to the RIGHT of ${curr.data}`)
                        curr.right = new BSTNode(newVal)
                    }
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", curr.data)
                    if (curr.left !== null) {
                        this.insertRecursive(newVal, curr.left)
                    } else {
                        // Insert LEFT
                        console.log(`Inserting ${newVal} to the LEFT of ${curr.data}`)
                        curr.left = new BSTNode(newVal)
                    }
                }
            }
        }
        return this
    }

/**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * Example on the fullTree var:
 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
toArrPreorder(node = this.root, vals = []) {
    function traverse(node){
        vals.push(node.data);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return vals;
}

/**
 * DFS Inorder: (Left, CurrNode, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * Example on the fullTree var:
 * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
// toArrInorder(node = this.root, vals = []) {}


// toArrPreorder
// Preorder (Parent, Left, Right): on the provided fullTree var, it should be in this order: [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
// toArrInorder
// Inorder (Left, Parent, Right): on the provided fullTree var, it should be in this order: [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]


  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  size(node = this.root, count = {val: 0}){
    //base case
    if(this.isEmpty()){
        return count['val'];
    }

    

    //increment the count each time the function is called
    count['val']++;

    if(node.left === null && node.right === null){
        return;
    }

    if(node.left){
        this.size(node.left, count);
    }

    if(node.right){
        this.size(node.right, count);
    }

    return count['val'];

}

/**
 * Calculates the height of the tree which is based on how many nodes from
 * top to bottom (whichever side is taller).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} node The current node during traversal of this tree.
 * @returns {number} The height of the tree.
 */
height(node = this.root) {

    if(this.isEmpty()){
        return 0;
    }

    if(node?.right == null && node?.left == null){
        return 1;
    }

    let left = this.height(node.left);
    let right = this.height(node.right);

    console.log("left: "+left)
    console.log("right: "+right);

    if(left > right){
        return left + 1;
    }
    else{
        return right + 1;
    }

}

isFullTree(node = this.root ){

if( node == null )
return true;

if( ( !node.left && node.right ) || ( node.left && !node.right ) )
return false;

return isFullTree( node.left ) && isFullTree( node.right );

    }
}
const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(25)
bst.insert(5)
bst.insert(15)
bst.insert(22)
bst.insert(50)
bst.insert(16)
console.log("The min value in the tree is ", bst.min())
bst.toArrPreorder()
