class Heap {
  constructor(data) {
    this.data = data;
    this.buildMaxHeap();
  }

  swapElements(index1, index2) {
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  maintainHeap(index, heapSize) {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let largest = index;

    if (leftChild < heapSize && this.data[leftChild] > this.data[largest]) {
      largest = leftChild;
    }

    if (rightChild < heapSize && this.data[rightChild] > this.data[largest]) {
      largest = rightChild;
    }

    if (largest !== index) {
      this.swapElements(index, largest);
      this.maintainHeap(largest, heapSize);
    }
  }

  buildMaxHeap() {
    const start = Math.floor(this.data.length / 2) - 1;
    for (let i = start; i >= 0; i--) {
      this.maintainHeap(i, this.data.length);
    }
  }

  sort() {
    for (let i = this.data.length - 1; i > 0; i--) {
      this.swapElements(0, i);
      this.maintainHeap(0, i);
    }
    return this.data;
  }
}

function heapSort(array) {
  const heap = new Heap(array);
  return heap.sort();
}

function main() {
  const numbers = [5, 4, 3, 2, 1, 8, 6, 2, 1, 5, 15];
  const sortedNumbers = heapSort(numbers);
  console.log(sortedNumbers);
}

main();
