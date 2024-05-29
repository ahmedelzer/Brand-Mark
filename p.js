// function insertNth(head, index, data) {
//   let newNode = new Node(data);
//   let next = 0;
//   if (!head || index == 0) {
//     newNode.next = head;
//     return newNode;
//   }
//   let current = head;
//   while (current) {
//     if (next === index) {
//       break;
//     }
//     current = current.next;
//     next += 1;
//   }
//   if (current.next) {
//     newNode.next = current.next;
//     current.next = newNode;
//   } else {
//     newNode.next = null;
//     current.next = newNode;
//   }

//   return head;
// }
// Example usage:
// Define the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Print the list
  printList() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data + " -> ";
      current = current.next;
    }
    console.log(list + "null");
  }

  // Remove a node by value
  remove(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Find a node by value
  find(data) {
    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }
    return current;
  }
}
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
function length(head) {
  let temp = head;
  let length = 0;
  while (temp != null) {
    length += 1;
    temp = temp.next;
  }
  return length;
}

function count(head, data) {
  let temp = head;
  console.log(temp);
  let count = 0;
  while (temp != null) {
    if (temp.data == data) {
      count += 1;
    }
    temp = temp.next;
  }
  return count;
}
console.log(count(list.head, 10));
list.printList(); // Example input
