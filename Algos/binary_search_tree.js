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
}

min(current = this.root) { 
    if (!this.isEmpty()) {
        if (current.left === null){
            return current.data
        }
        return this.min(current.left)
    }
}

max(current = this.root) {
    // Traverse BST
    while (current.right) {
        current = current.right
    }
    return current.data
}

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
}

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

