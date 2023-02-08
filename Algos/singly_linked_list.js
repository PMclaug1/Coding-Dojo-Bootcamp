/**
 * Constructs a new instance of an empty linked list that inherits all the
 * methods.
 * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
 *    returned without having to explicitly write "return".
 */
constructor() {
    this.head = null;
    this.last = null;
}

/**
 * Determines if this list is empty.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean}
 */
isEmpty() {
    return this.head === null;
}

/**
 * Creates a new node with the given data and inserts it at the back of
 * this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} data The data to be added to the new node.
 * @returns {SinglyLinkedList} This list.
 */
insertAtBack(data) {
    const node = new ListNode(data)

    if (this.isEmpty()) {
        this.head = node
        this.last = node
    } 
    else {
        this.last.next = node
        this.last = node
    }
}

printList() {
    let curr = this.head
    while (curr.next !== null) {
        console.log(curr.data)
        curr = curr.next
    }
    console.log(curr.data)
}


const sll = new SinglyLinkedList()
sll.insertAtBack(5)
sll.insertAtBack(10)
sll.insertAtBack(3)

sll.printList()