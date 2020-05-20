class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //Insert First node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //Insert last node 
    insertLast(data) {
        let node = new Node(data);
        let current;

        //If empty , make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //Insert at index
    insertAt(data, index) {
        //if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }
        //If first index 
        if(index === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        const node = new Node(data);
        let current, previous;
        
        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;   //Node before index
            count++;
            current = current.next; //Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }

    //Has Cycle
    hasCycle(linkedList) {
        let pointer1 = linkedList;
        let pointer2 = linkedList;

        while(pointer2 && pointer2.next) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;

            if( pointer1 === pointer2) {
                return true;
            }
        }
        return false;
    }



    //Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }
    //Reverse List
    reverseList(head) {
        let previous = null;
        while(head) {
            let p = head.next;
            head.next = previous;
            previous = head;
            head = p;
        }
        return previous;
    }
    //find middle node 
    middleNode(head) {
        slow = fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


    //Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //Remove first
        if( index === 0 ) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //Sort List
    sortList(linkedList) {
        var sortedList = [];
        var map = new Map();
        var currentId = null;

        for( var i = 0; i < linkedList.length; i++) {
            var item = linkedList[i];
            if(item.previous_item_id === null) {
                currentId = item.item_id;
                sortedList.push(item);
            } else {
                map.set(item.previous_item_id, i);
            }
        }
        while( sortedList.length < linkedList.length) {
            var nextItem = linkedList[map.get(currentId)];
            sortedList.push(nextItem);
            currentId = nextItem.item_id;
        }
        return sortedList;
    }

    //Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    //Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList()

ll.insertFirst('Apollo');
ll.insertFirst('Boomer');
ll.insertFirst('Helo');
ll.insertLast('Husker');
ll.insertLast('Starbuck');
ll.insertAt('Tauhida', 2);
ll.insertAt('Kat', 2);

//ll.clearList()
ll.removeAt(3)

ll.printListData();

/*
Mystery Program
This algorithm inserts a new node first into the linked list, The time complexity of this algorithm is going to be Constant time 0(1) the reason for this is because whenever the new node is inserted into the first spot, the time will take the same amount of time no matter the length of the list.
*/








