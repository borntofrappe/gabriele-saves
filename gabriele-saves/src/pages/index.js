import React, { useRef } from "react"
import styled from 'styled-components'
import { useSpring, useChain, animated } from 'react-spring'
import Icon from '../components/icons'

const Navigation = styled.nav`
    font-family: monospace;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 40%);
`

const Item = styled.a`
    position: absolute;
    text-decoration: none;
    font-family: inherit;
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
    letter-spacing: -1px;
    transform: ${({index, length, size}) => `rotate(${360 / length * index}deg) translateY(${size * -1}px) rotate(${360 / length * index * -1}deg)`};
    color: inherit;
    &:hover,
    &:focus {
        color: ${({color}) => color};

    }

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`


export default () => {
    const items = [
        {
            name: 'blog',
            href: '#',
            label: 'Getting started with my own blog',
            color: 'hsl(0, 80%, 60%)',
        },
        {
            name: 'codepen',
            href: 'https://codepen.io/borntofrappe',
            tagLine: 'Coding plenty on codepen',
            color: 'hsl(0, 0%, 6%)',
        },
        {
            name: 'freecodecamp',
            href: 'https://www.freecodecamp.org/borntofrappe',
            tagLine: 'Always learning on freecodecamp',
            color: 'hsl(120, 50%, 40%)',
        },
        {
            name: 'twitter',
            href: 'twitter.com/borntofrappe',
            tagLine: 'Posting almost daily on twitter',
            color: 'hsl(200, 80%, 60%)',
        },
        {
            name: 'github',
            href: 'https://github.com/borntofrappe',
            tagLine: 'Open sourcing it all on github',
            color: 'hsl(0, 0%, 0%)',
        },
    ]

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
        <Navigation>
            {items.map(({name, href, tagLine, color}, index, {length}) => (
            <Item key={name} size={135} index={index} length={length} href={href} aria-label={name} color={color}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="200" height="200">
                    <g>
                        <path id="icon-circle" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" stroke="currentColor" strokeWidth="6" fill="none" />
                        <text fontSize="14" dy="-7">
                            <textPath href="#icon-circle" startOffset="0">
                                {name}
                            </textPath>
                        </text>
                        <g transform="scale(0.35) translate(-50 -50)">
                            <Icon icon={name} />
                        </g>
                    </g>
                </svg>
            </Item>
            ))}

            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 200 200" width="200" height="200">
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
        </Navigation>
    )
}