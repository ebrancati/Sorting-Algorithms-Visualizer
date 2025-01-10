// Generate bars with random heights
export function generateBars(bars) {

    bars.length = 0;
    
    const numElementsInput = document.getElementById('numElements').value;
    
    for (let i = 0; i < numElementsInput; i++) {
        const height = Math.floor(Math.random() * 400) + 10; // Random height between 10 and 400
        const bar = document.createElement('div');

        bar.classList.add('bar');
        bar.style.height = `${height}px`;

        container.appendChild(bar);
        bars.push(bar);
    }
}

export function swapBars(bars, i, j, arrayAccesses, arrayAccessesEl) {
    const tempHeight = bars[i].style.height;

    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = tempHeight;

    arrayAccesses += 4; // Two reads and two writes
    arrayAccessesEl.textContent = arrayAccesses;
}
