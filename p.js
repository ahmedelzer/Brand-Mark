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
function sortSequence(sequence) {
  //coding and coding..
  return sequence.sort((a, b) => a - b);
}
console.log(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0]));
