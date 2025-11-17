const makeIdFunc = () => {
      let count = 0;
  const countFunc = () => {
    count++;
    return count;
  }
  return countFunc
};

const makePasswordChecker = (correctPassword) => {
  let count = 0;
  const passwordAttempts = (guess) => {
    if (count === 3) {
      return 'Account locked'
    }
    if (guess === correctPassword) {
      //count++ not necessary cuz only matters if false 
      return true
    } else {
      count++
      return false
    }
  }
  return passwordAttempts 
};

const makeMultiplier = (multiplier) => {
  const multiply = (array) => {
    return array.map(num => num * multiplier)
  }
  return multiply 
};

const makeFilterByLength = (length) => {
  const getString = (string) => {
    return string.filter(word => word.length <= length)
  }
return getString
};

const makeGradeTracker = () => {
   const grades = []
   return {
   addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
    grades.push(grade)
  return true
    } else {
    return false
   } 
   },
   getAverage() {
    if (grades.length === 0) {
      return 0
    }
    const addGrades = grades.reduce((acc, currVal) => acc + currVal)
    return addGrades / grades.length
   }
 }
};

const makeShoppingList = () => {
  const items = []
  return {
    getItems() {
      return [...items]
    },
    addItem(item) {
      items.push(item)
      console.log(`${item} successfully added! Now you have ${items.length} item(s).`)
      return items.length 
    },
    removeItem(item) {
      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1)
        console.log(`${item} successfully removed. You now have ${items.length} item(s).`)
        return true
      } else {
        console.log(`${item} not found.`)
        return false
      }
    }
  }
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
