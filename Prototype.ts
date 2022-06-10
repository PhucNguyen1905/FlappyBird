interface Prototype {
    clone(mode: number): this
}

class DataClass implements Prototype {
    arr: number[]

    constructor(arr: number[]) {
        this.arr = arr
    }

    clone(mode: number) {
        if (mode == 1) {
            return Object.assign({}, this) // shallow copy
        } else {
            return JSON.parse(JSON.stringify(this)); //deep copy
        }
    }
}

const data1 = new DataClass([1, 2, 3, 4])
console.log('data1: ', data1)

const data2 = data1.clone(1) // Shallow copy
console.log('data2: ', data2)

data2.arr[0] = 5;

// Comparing data1 and data2
console.log('data1: ', data1)
console.log('data2: ', data2)