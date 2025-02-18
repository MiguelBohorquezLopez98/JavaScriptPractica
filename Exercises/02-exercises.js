//ANAGRAMA
function isAnagram(var1, var2) {
    var1 = var1.toLowerCase()
    var2 = var2.toLowerCase()
    if ((var1) === (var2)){
        return false
    }
    var1 = var1.split('').sort().join('')
    var2 = var2.split('').sort().join('')
    return var1 === var2
}

const result = isAnagram('Amor','Roma')
console.log(result)