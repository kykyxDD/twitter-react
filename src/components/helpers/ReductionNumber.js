export const reduction = num => {
  if(num < Math.pow(10, 3)) {
    return num
  } else if(num < Math.pow(10, 4)){
    let arr = (''+num).split('')
    arr.splice(1, 0, " ")
    return arr.join('')
  } else if(num < Math.pow(10, 6)){
    return getReduction(num, Math.pow(10, 3)) +' тыс'
  } else {
    return getReduction(num, Math.pow(10, 6)) +' млн'
  }
}

const getReduction = (num, del) => {
  const k = (num/del).toFixed()
  if(k.length < 3) {
    const n = (''+(num%del)).substr(0, 3 - k.length)
    return [k,n].join(',')
  } else if(k.length === 3){
    return k
  } else {
    let arr = k.split('').reverse()
    arr.splice(3, 0, " ")
    return arr.reverse().join('')
  }
}