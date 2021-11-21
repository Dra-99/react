import React, {useEffect} from 'react'
import scrollWithAnimate from './util/scrollWithAnimate'

export default function useScrollAnimate(pagePath) {
    useEffect(scrollWithAnimate, pagePath);
}
