/**
 * Check if a file already exists in the dowloadedFiles directory
 * @param {string} id
 * @param {string} qualityCode
 * @returns {boolean} - If the file already exists return true
 */
const creaElementi = (elements) => {
  let arr = []
  let random = 0;

  for (let i=0; i<30; i++) {
    do {
      random = Math.floor((Math.random() * 50) + 1)
    } while (arr.includes(random))

    arr.push(random)

    elements[i].textContent = random;
    elements[i].style.height = `${(random+1)*10}px`;
    elements[i].style.backgroundColor = "gray"
  }

  return arr
}

export default creaElementi

