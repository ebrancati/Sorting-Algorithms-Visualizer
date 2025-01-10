export function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export let isPaused = false;

export function setPause(state) {
    isPaused = state;
}

export function pauseCheck() {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            if (!isPaused) {
                clearInterval(interval);
                resolve();
            }
        }, 100); // Check every 100ms
    });
}
