
const theArray = (val) => {
  const newArray = [];
  for (let i = 0; i < val; i++) {
    const line = [];
    for (let j = 0; j < val; j++) {
      const randomNum = Math.round(Math.random());
        if (randomNum === 1) {
          line.push('¥')}
          else{
            line.push('ø')
          }         
    }

    newArray.push(line);
  }

  return newArray
}

console.log(theArray(10))
