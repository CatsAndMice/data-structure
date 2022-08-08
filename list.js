// 列表
function List(){
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
    this.clear = clear
    this.toString = toString
    this.getElement = getElement
    this.insert = insert
    this.append = append
    this.remove = remove
    //将当前元素移至第一位
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.hasNext = hasNext
    this.hasPrev = hasPrev
    this.currPos = currPos
    this.moveTo = moveTo
}