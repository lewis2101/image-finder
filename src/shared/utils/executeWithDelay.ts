export function executeWithDelay<T>(callback: () => void): Promise<T> {
    const MIN_REQUEST_DELAY = 300;
    const MAX_REQUEST_DELAY = 500;

    const delay = Math.round(Math.random() * MAX_REQUEST_DELAY) + MIN_REQUEST_DELAY;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback() as T);
        }, delay);
    })

}