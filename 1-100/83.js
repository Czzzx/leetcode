/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * --------------------------------
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 */
var deleteDuplicates = function(head) {
    if (!head) return head;

    let node = head;
    let preValue = node.val;

    while (node.next) {
        if (preValue === node.next.val) {
            node.next = node.next.next;
        } else {
            preValue = node.next.val;
            node = node.next;
        }
    }

    return head;
};