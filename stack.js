let stack = []

stack.push(1)
console.log(stack)

stack.push(2)
console.log(stack)

stack.push(3)
console.log(stack)

stack.push(4)
console.log(stack)

stack.push(5)
console.log(stack)

// stack.push(6, 7, 8,9,10)

console.log(stack)


console.log(stack.pop())
console.log(stack)

console.log(stack.pop())
console.log(stack)

console.log(stack.pop())
console.log(stack)

console.log(stack.pop())
console.log(stack)

console.log(stack.pop())
console.log(stack)

console.log(stack.pop())


function reverse(str) {
    let stack = []
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    // pop letter from the stack
    let reverseStr = ''
    while (stack.length > 0) {
        reverseStr += stack.pop()
    }
    return reverseStr
}

console.log(reverse('JavaScript Stack'))
