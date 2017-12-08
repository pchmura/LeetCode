/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


var addTwoNumbers = function(l1, l2) {
    var remainder = 0;
    var sumListHead = new ListNode(0);
    var currentNode = sumListHead;
    while(l1 || l2){
        var val1 = (l1 != null) ? l1.val : 0;
        var val2 = (l2 != null) ? l2.val : 0;
        var sum = val1 + val2 + remainder;
        remainder = Math.floor(sum / 10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(remainder > 0){
        currentNode.next = new ListNode(remainder);
    }
    return sumListHead.next;
    
};