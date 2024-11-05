import sleep from "./sleep.js";

const bubbleSort = async (arr, elements) => {
    console.log("hi")
    let temp;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<(arr.length-i-1); j++) {

            elements[j].style.backgroundColor="blue";
            elements[j+1].style.backgroundColor="blue";

            await sleep()

            if(arr[j]>arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                elements[j].style.backgroundColor="orange";
                elements[j+1].style.backgroundColor="orange";
                let elementsTemp = elements[j].style.height
                let elementsTempN = elements[j].textContent
                elements[j].style.height = elements[j+1].style.height
                elements[j].textContent = elements[j+1].textContent
                elements[j+1].style.height = elementsTemp
                elements[j+1].textContent = elementsTempN
                await sleep()
            }

            elements[j].style.backgroundColor="gray";
            elements[j+1].style.backgroundColor="gray";

            await sleep()
        }
        elements[arr.length-i-1].style.backgroundColor="green"
    }
    
}

export default bubbleSort;