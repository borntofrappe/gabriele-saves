import React, { useRef } from "react"
import styled from 'styled-components'
import { useSpring, useChain, animated } from 'react-spring'

const LandingPage = styled(animated.div)`
    font-family: monospace;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
`


export default () => {
    const savingRef = useRef()
    const saving = useSpring({
        delay: 250,
        config: {
            mass: 1.5,
            tension: 350,
            friction: 25
        },
        from: { transform: 'scale(0) rotate(0deg)' },
        to: { transform: 'scale(1) rotate(-30deg)' },
        ref: savingRef,
    })

    const pencilRef = useRef()
    const pencil = useSpring({
        config: {
          mass: 1.4,
          tension: 278,
          friction: 35,
        },
        from: { transform: 'translate(-40px, 0px)' },
        to: async next => {
            await next({ transform: 'translate(0px, 0px)' })
            await next({ transform: 'translate(-40px, 14px)' })
            await next({ transform: 'translate(0px, 14px)' })
            await next({ transform: 'translate(-40px, 28px)' })
            await next({ transform: 'translate(0, 28px)' })
            await next({ transform: 'translate(-40px, 42px)' })
            await next({ transform: 'translate(0, 42px)' })
        },
        ref: pencilRef
      })

    const savingStrokeAnimation = {
        from: { strokeDashoffset: 37 },
        to: { strokeDashoffset: 0 },
    }
    const savingStroke1Ref = useRef()
    const savingStroke1 = useSpring({
        ...savingStrokeAnimation,
        ref: savingStroke1Ref
    })

    const savingStroke2Ref = useRef()
    const savingStroke2 = useSpring({
        ...savingStrokeAnimation,
        ref: savingStroke2Ref
    })

    const savingStroke3Ref = useRef()
    const savingStroke3 = useSpring({
        ...savingStrokeAnimation,
        ref: savingStroke3Ref
    })

    const savingStroke4Ref = useRef()
    const savingStroke4 = useSpring({
        ...savingStrokeAnimation,
        ref: savingStroke4Ref
    })

    const savingCompleteRef = useRef()
    const savingComplete = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        immediate: true,
        ref: savingCompleteRef
      })

    const savedRef = useRef()
    const saved = useSpring({
        config: {
          mass: 1.5,
          tension: 375,
          friction: 20,
        },
        from: { transform: 'scale(0) rotate(0deg)' },
        to: { transform: 'scale(1) rotate(-60deg)' },
        ref: savedRef
      })

    const savedStrokeRef = useRef()
    const savedStroke = useSpring({
        from: {
            strokeDashoffset: 58,
            transform: 'rotate(0deg)'
           },
        to: {
            strokeDashoffset: 0,
            transform: 'rotate(60deg)'
        },
        ref: savedStrokeRef
    })

    const whenSaved = 3 + Math.floor(Math.random() * 2)
    useChain([savingRef, pencilRef, savingStroke1Ref, savingStroke2Ref, savingStroke3Ref, savingStroke4Ref, savingCompleteRef, savedRef, savedStrokeRef], [0, 1, 1, 2, 3, 4, whenSaved, whenSaved, whenSaved])

    return (
        <LandingPage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200" width="225" height="225">
                <defs>
                    <mask id="saving--mask">
                        <rect fill="hsl(0, 0%, 100%)" x="-50" y="-50" width="100" height="100" />
                        <animated.g style={pencil}>
                            <path fill="hsl(0, 0%, 0%)" d="M 12 38 l 16 0 0 -42 -8 -12 -8 12 z m 0 -37 h 16 z m 8 -15 v 2" />
                        </animated.g>
                    </mask>
                </defs>
                <animated.g style={savingComplete}>
                    <animated.g style={saving}>
                        <g mask="url(#saving--mask)">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <circle r="46" strokeWidth="8" />
                                <g strokeWidth="5">
                                    <animated.path style={savingStroke1} d="M -18 -21 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={savingStroke2} d="M -18 -7 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={savingStroke3} d="M -18 7 h 36" strokeDasharray="37" strokeDashoffset="37"/>
                                    <animated.path style={savingStroke4} d="M -18 21 h 36" strokeDasharray="37" strokeDashoffset="37" />
                                </g>
                            </g>
                        </g>
                        <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="square">
                            <animated.g style={pencil}>
                                <path d="M 12 38 l 16 0 0 -42 -8 -12 -8 12 z m 0 -37 h 16 z m 8 -15 v 2" />
                            </animated.g>
                        </g>
                    </animated.g>
                </animated.g>

                <animated.g style={saved}>
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle r="46" strokeWidth="8" />
                        <animated.path style={savedStroke} transform="rotate(0)" d="M -20 -0 l 15 15 25 -25" strokeWidth="10" strokeDasharray="58" strokeDashoffset="58"/>
                    </g>
                </animated.g>
            </svg>
        </LandingPage>
    )
}