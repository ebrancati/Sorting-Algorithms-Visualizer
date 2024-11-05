import sleep from "./sleep.js";

const selectionSort = async (arr, elements) => {
  let lowest, temp;

  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    elements[i].style.backgroundColor="blue";

    await sleep()


    for (let j = i + 1; j < arr.length; j++) {


      await sleep()

      if (arr[lowest] > arr[j]) {
        lowest = j;
        for (const element of elements) {
          if (element.style.backgroundColor==="green") {
            element.style.backgroundColor="red";
            break;
          }
        }
          
        elements[j].style.backgroundColor="green";

        await sleep()

      }
      else {
        elements[j].style.backgroundColor="red"
      }
    }
    temp = arr[lowest];
    arr[lowest] = arr[i]
    arr[i] = temp;

    for (const element of elements) {
      element.style.backgroundColor="gray";
    }

    elements[lowest].style.backgroundColor = "orange"
    elements[i].style.backgroundColor = "orange"

    await sleep()


    let elementsTemp = elements[lowest].style.height
    let elementsTempN = elements[lowest].textContent
    elements[lowest].style.height = elements[i].style.height
    elements[lowest].textContent = elements[i].textContent
    elements[i].style.height = elementsTemp
    elements[i].textContent = elementsTempN

    elements[lowest].style.backgroundColor = "orange"
    elements[i].style.backgroundColor = "orange"

 
    await sleep()

      

    for (const element of elements) {
      element.style.backgroundColor="gray";
    }
  }

  for (const element of elements) {
    element.style.backgroundColor="green";

    await sleep()

  }

  return arr;
}

export default selectionSort;

