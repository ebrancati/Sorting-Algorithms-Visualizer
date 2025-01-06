
const container = document.getElementById('container');
const comparisonsEl = document.getElementById('comparisons');
const arrayAccessesEl = document.getElementById('arrayAccesses');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const speed0_5xBtn = document.getElementById('speed0_5x');
const speed1xBtn = document.getElementById('speed1x');
const speed4xBtn = document.getElementById('speed4x');
const speed100xBtn = document.getElementById('speed100x');
const algorithmSelect = document.getElementById('algorithm');

let comparisons = 0;
let arrayAccesses = 0;
let isPaused = false;
let delay = 50; // Initial delay

// Generate 100 bars with random heights
const bars = [];
for (let i = 0; i < 100; i++) {
    const height = Math.floor(Math.random() * 400) + 10; // Random height between 10 and 400
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${height}px`;
    container.appendChild(bar);
    bars.push(bar);
}

function pauseCheck() {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (!isPaused) {
                clearInterval(interval);
                resolve();
            }
        }, 100); // Check every 100ms
    });
}

async function selectionSort() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    for (let i = 0; i < bars.length; i++) {
        let minIndex = i;
        bars[minIndex].classList.add('comparing');

        for (let j = i + 1; j < bars.length; j++) {
            comparisons++;
            comparisonsEl.textContent = comparisons;

            bars[j].classList.add('comparing');
            await pause(delay);
            await pauseCheck(); // Pausa controllata

            arrayAccesses += 2; // Accessing bars[j] and bars[minIndex]
            arrayAccessesEl.textContent = arrayAccesses;

            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                bars[minIndex].classList.remove('comparing');
                bars[minIndex].classList.remove('potential-swap');
                minIndex = j;
                bars[minIndex].classList.add('comparing');
                bars[minIndex].classList.add('potential-swap');
            }

            bars[j].classList.remove('comparing');
        }

        if (minIndex !== i) {
            bars[i].classList.add('swap');
            bars[minIndex].classList.add('swap');

            await pause(delay * 2); // Pause to visualize swap

            swapBars(bars, i, minIndex);

            bars[i].classList.remove('swap');
            bars[minIndex].classList.remove('swap');
        }

        bars[minIndex].classList.remove('comparing');
        bars[minIndex].classList.remove('potential-swap');
        bars[i].classList.add('sorted');
    }

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
}

async function bubbleSort() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            comparisons++;
            comparisonsEl.textContent = comparisons;

            bars[j].classList.add('comparing');
            bars[j + 1].classList.add('comparing');
            await pause(delay);
            await pauseCheck();

            arrayAccesses += 2; // Accessing bars[j] and bars[j+1]
            arrayAccessesEl.textContent = arrayAccesses;

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                bars[j].classList.remove('comparing');
                bars[j + 1].classList.remove('comparing');
                bars[j].classList.add('swap');
                bars[j + 1].classList.add('swap');

                await pause(delay * 2); // Pause to visualize swap

                swapBars(bars, j, j + 1);

                bars[j].classList.remove('swap');
                bars[j + 1].classList.remove('swap');
            } else {
                bars[j].classList.remove('comparing');
                bars[j + 1].classList.remove('comparing');
            }
        }

        bars[bars.length - i - 1].classList.add('sorted');
    }

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
}

function swapBars(bars, i, j) {
    const tempHeight = bars[i].style.height;
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = tempHeight;

    arrayAccesses += 4; // Two reads and two writes
    arrayAccessesEl.textContent = arrayAccesses;
}

function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

pauseBtn.addEventListener('click', () => {
    isPaused = true;
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
});

resumeBtn.addEventListener('click', () => {
    isPaused = false;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
});

startBtn.addEventListener('click', () => {
    comparisons = 0;
    arrayAccesses = 0;
    comparisonsEl.textContent = comparisons;
    arrayAccessesEl.textContent = arrayAccesses;
    isPaused = false;

    // Get the selected algorithm
    const selectedAlgorithm = algorithmSelect.value;
    if (selectedAlgorithm === 'selectionSort') {
        selectionSort();
    } else if (selectedAlgorithm === 'bubbleSort') {
        bubbleSort();
    }
});

speed0_5xBtn.addEventListener('click', () => {
    delay = 200; // 0.50x speed
});

speed1xBtn.addEventListener('click', () => {
    delay = 100; // Normal speed
});

speed4xBtn.addEventListener('click', () => {
    delay = 25; // 4.00x speed
});

speed100xBtn.addEventListener('click', () => {
    delay = 1; // 100.00x speed
});
