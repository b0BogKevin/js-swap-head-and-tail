function swapHeadAndTail(p) {
    let halfWay = Math.floor(p.length/2)
    let eredmeny = []
    for (let i = halfWay; i < p.length; i++) {
        eredmeny.push(p[i])
    }
    for (let j = 0; j < halfWay; j++) {
        eredmeny.push(p[j]);   
    }
    return eredmeny
}

let test1 = [ -1, 2 ];
let test2 = [ 1, 2, -3, 4, 5, 6, -7, 8 ]

console.log(swapHeadAndTail(test1).join())
console.log(swapHeadAndTail(test2).join())

