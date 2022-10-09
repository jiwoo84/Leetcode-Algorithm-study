/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let cnt = 0;
    let start = head;
    while(start !== null){
        start = start.next;
        cnt++;
    }
    if(cnt <= 2) return head;
    
    //reorder 시작의 대상이 되는 노드의 이전 노드 찾기
    let tail = head;
    for(let i = 0 ; i < ~~(cnt/2) ; i++){
        tail = tail.next;
    }

    // reorder의 대상 노드를 stack에 담기
    const stack = [];
    let insert = tail.next;
    while(insert !== null){
        stack.push(insert);
        insert = insert.next;
    }
    tail.next = null;

    // reorder
    let insertPrev = head;
    let insertNext = insertPrev.next;
    while(stack.length !== 0){
        insert = stack.pop();
        insert.next = insertNext;
        insertPrev.next = insert;

        insertPrev = insertNext;
        insertNext = insertPrev.next;
    }
    return head;
};
