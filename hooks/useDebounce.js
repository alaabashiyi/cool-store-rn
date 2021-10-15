import { useState, useEffect } from 'react'


const useDebounce = (value, reset, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            if (value === '') {
                reset();
            }
            const timeoutId = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(timeoutId);
            };
        },
        [value, delay]
    );
    return debouncedValue;
}

export default useDebounce;