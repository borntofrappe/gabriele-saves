import React, { useRef } from "react"
import styled from 'styled-components'
import { useSpring, useChain, animated } from 'react-spring'

const LandingPage = styled(animated.div)`
    font-family: monospace;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(0, 0%, 20%);
`


export default () => {
    const savingRef = useRef()
    const saving = useSpring({
        delay: 200,
        config: {
            mass: 1.5,
            tension: 350,
            friction: 20
        },
        from: { transform: 'scale(0) rotate(0deg)' },
        to: { transform: 'scale(1) rotate(-30deg)' },
        ref: savingRef,
    })

    const pencilRef = useRef()
    const pencil = useSpring({
        config: {
          mass: 1.38,
          tension: 280,
          friction: 35,
        },
        from: { transform: 'translate(-42px, 0px)' },
        to: async next => {
            await next({ transform: 'translate(0px, 0px)' })
            await next({ transform: 'translate(-42px, 14px)' })
            await next({ transform: 'translate(0px, 14px)' })
            await next({ transform: 'translate(-42px, 28px)' })
            await next({ transform: 'translate(0, 28px)' })
            await next({ transform: 'translate(-42px, 42px)' })
            await next({ transform: 'translate(0, 42px)' })
        },
        ref: pencilRef
      })

    const pencilStrokeAnimation = {
        from: { strokeDashoffset: 37 },
        to: { strokeDashoffset: 0 },
    }
    const pencilStroke1Ref = useRef()
    const pencilStroke1 = useSpring({
        ...pencilStrokeAnimation,
        ref: pencilStroke1Ref
    })

    const pencilStroke2Ref = useRef()
    const pencilStroke2 = useSpring({
        ...pencilStrokeAnimation,
        ref: pencilStroke2Ref
    })

    const pencilStroke3Ref = useRef()
    const pencilStroke3 = useSpring({
        ...pencilStrokeAnimation,
        ref: pencilStroke3Ref
    })

    const pencilStroke4Ref = useRef()
    const pencilStroke4 = useSpring({
        ...pencilStrokeAnimation,
        ref: pencilStroke4Ref
    })

    const finishSavingRef = useRef()
    const finishSaving = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        immediate: true,
        ref: finishSavingRef
      })

    const savedRef = useRef()
    const saved = useSpring({
        config: {
          mass: 1.5,
          tension: 350,
          friction: 20,
        },
        from: { transform: 'scale(0) rotate(0deg)' },
        to: { transform: 'scale(1) rotate(-45deg)' },
        ref: savedRef
      })

    const savedStrokeRef = useRef()
    const savedStroke = useSpring({
        from: {
            strokeDashoffset: 58,
           },
          to: { strokeDashoffset: 0,
           },
        ref: savedStroke
    })

    const lines = 3 + Math.floor(Math.random() * 2)
    useChain([savingRef, pencilRef, pencilStroke1Ref, pencilStroke2Ref, pencilStroke3Ref, pencilStroke4Ref, finishSavingRef, savedRef, savedStrokeRef], [0, 1, 1, 2, 3, 4, lines, lines, lines])

    return (
        <LandingPage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200" width="200" height="200">
                <defs>
                    <mask id="saving--mask">
                        <rect fill="hsl(0, 0%, 100%)" x="-50" y="-50" width="100" height="100" />
                        <animated.g style={pencil}>
                            <path fill="hsl(0, 0%, 0%)" d="M 13 38 l 16 0 0 -42 -8 -12 -8 12 z m 0 -37 h 16 z m 8 -15 v 2" />
                        </animated.g>
                    </mask>
                </defs>
                <animated.g style={finishSaving}>
                    <animated.g style={saving}>
                        <g mask="url(#saving--mask)">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <circle r="46" strokeWidth="8" />
                                <g strokeWidth="5">
                                    <animated.path style={pencilStroke1} d="M -18 -21 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={pencilStroke2} d="M -18 -7 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={pencilStroke3} d="M -18 7 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={pencilStroke4} d="M -18 21 h 36" strokeDasharray="37" strokeDashoffset="37" />
                                </g>
                            </g>
                        </g>
                        <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="square">
                            <animated.g style={pencil}>
                                <path d="M 13 38 l 16 0 0 -42 -8 -12 -8 12 z m 0 -37 h 16 z m 8 -15 v 2" />
                            </animated.g>
                        </g>
                    </animated.g>
                </animated.g>

                <animated.g style={saved}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle r="46" strokeWidth="8" />
                        <g transform="rotate(45)">
                            <animated.path style={savedStroke} d="M -20 -0 l 15 15 25 -25" strokeWidth="10" strokeDasharray="58" strokeDashoffset="58"/>
                        </g>
                    </g>
                </animated.g>
            </svg>
        </LandingPage>
    )
}