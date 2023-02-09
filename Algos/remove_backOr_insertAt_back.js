removeTail() {
    let data = null;
    if (this.head.next !== null ) {
        let pointer = this.head;
        while(pointer.next.next !== null) {
            pointer = pointer.next;
        }
        data = pointer.next.value;
        pointer.next = null;
    }
    else {
        data = this.head.value;
        this.head = null;
    }
    return data;
}

createFromArr(arr) {
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            this.insertAtFront(arr[i]);
        }
    }
}

convertToArr() {
    if (!this.isEmpty()) {
        let arr = [];
        let pointer = this.head;
        while(pointer.next !== null) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }
        arr.push(pointer.value);
        return arr;
    }
}

insertAtBackRecursive(data, runner = this.head) {
    if (!this.isEmpty()) {
        if (runner.next == null) {
            runner.next = new Node(data);
            this.display();
            return;
        }
        runner = runner.next;
        this.insertAtBackRecursive(data, runner);
    }
    else{
        this.head = new Node(data);
    }
}

display() {
    let currentNode = this.head;
    let nodeNum = 1;
    console.log("\nHead: Value = " + currentNode.value + " Next = " + currentNode.next);
    while(currentNode.next != null) {
        nodeNum++;
        currentNode = currentNode.next;
        currentNode.next == null ? 
            console.log("Tail: Value = " + currentNode.value + " Next = " + currentNode.next) :
            console.log("Node " + nodeNum + ": Value = " + currentNode.value + " Next = " + currentNode.next);
    }
}