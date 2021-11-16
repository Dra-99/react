import React, {useEffect} from 'react'
let timer = null;

export default function useIntervel(func, duration) {

    useEffect(() => {
        timer = setInterval(func, duration);
        return () => {
            clearTimeout(timer);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
