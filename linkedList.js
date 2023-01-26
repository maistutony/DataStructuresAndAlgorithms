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
    find(data) {
      let current = this.head;
      while (current != null) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    printList() {
      let current = this.head;
      let string = "";
      while (current != null) {
        string += current.data + " ";
        current = current.next;
      }
      console.log(string);
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
          return;
        }
    
        if (index === 0) {
          this.head = this.head.next;
          this.length--;
          return;
        }
    
        let current = this.head;
        let i = 0;
        while (i < index - 1) {
          current = current.next;
          i++;
        }
    
        current.next = current.next.next;
        this.length--;
      }
      insertAtIndex(index, data) {
        if (index < 0 || index > this.length) {
          return;
        }
    
        const newNode = new Node(data);
    
        if (index === 0) {
          newNode.next = this.head;
          this.head = newNode;
          this.length++;
          return;
        }
    
        let current = this.head;
        let i = 0;
        while (i < index - 1) {
          current = current.next;
          i++;
        }
    
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
      }
  }
  