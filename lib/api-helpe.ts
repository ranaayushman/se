// lib/api-helpers.ts

export const createWithRetry = async <T>(requestFn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> => {
    try {
        return await requestFn();
    } catch (error: any) {
        if (error.code === 429 && retries > 0) {
            console.log(`Rate limited, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return createWithRetry(requestFn, retries - 1, delay * 2);
        }
        throw error;
    }
};