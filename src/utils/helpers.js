export function calculatePerformance(framesRendered, timeElapsed) {
    if (timeElapsed === 0) return 0;
    return framesRendered / timeElapsed;
}

export function logEvent(event) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${event}`);
}