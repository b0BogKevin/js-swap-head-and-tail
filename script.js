function swapHeadAndTail(p) {
    let halfWay = Math.ceil(p.length/2)
    let eredmeny = []
    if (p.length%2==0) {
        for (let i = halfWay; i < p.length; i++) {
        eredmeny.push(p[i])
    }
    for (let j = 0; j < halfWay; j++) {
        eredmeny.push(p[j]);   
    }
    return eredmeny
    }

    for (let i = halfWay; i < p.length; i++) {
        eredmeny.push(p[i])
    }
    eredmeny.push(p[halfWay-1])
    for (let j = 0; j < halfWay-1; j++) {
        eredmeny.push(p[j]);   
    }
    return eredmeny
    
}

let test1 = [ -1, 2 ];
let test2 = [ 1, 2, -3, 4, 5, 6, -7, 8 ]
let test3 = [1,2,3]

console.log(swapHeadAndTail(test1).join())
console.log(swapHeadAndTail(test2).join())
console.log(swapHeadAndTail(test3).join())


