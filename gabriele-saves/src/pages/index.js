import React, { useRef } from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, useChain, animated } from 'react-spring'
import Icon from '../components/icons'

const Navigation = styled.svg`
    display: block;
    margin: auto;
    max-width: 500px;
    height: auto;
    width: 100vw;
    background: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 50%);
    font-family: monospace;
`

const LinkTo = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    letter-spacing: 1px;
    transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.5), color 350ms ease-in-out;
    transform: scale(0.9);
    outline: none;

    &:hover,
    &:focus {
        color: ${({color}) => color};
        transform: scale(1.1);
    }

    .text {
        transform: scale(0);
        transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
        transition-delay: 0ms;
    }

    &:hover .text,
    &:focus .text {
        transform: scale(1);
        transition-delay: 75ms;
    }
`

const LinkHref = styled.a`
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    letter-spacing: 1px;
    transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.5), color 350ms ease-in-out;
    transform: scale(0.9);
    outline: none;

    &:hover,
    &:focus {
        color: ${({color}) => color};
        transform: scale(1.1);
    }

    .text {
        transform: scale(0);
        transition: transform 375ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
        transition-delay: 0ms;
    }

    &:hover .text,
    &:focus .text {
        transform: scale(1);
        transition-delay: 75ms;
    }
`

export default () => {
    const links = [
        {
            name: 'blog',
            to: '/blog',
            label: 'My personal blog',
            color: 'hsl(0, 80%, 60%)',
        },
        {
            name: 'codepen',
            href: 'https://codepen.io/borntofrappe',
            label: 'CodePen Profile',
            color: 'hsl(0, 0%, 6%)',
        },
        {
            name: 'freecodecamp',
            href: 'https://www.freecodecamp.org/borntofrappe',
            label: 'freeCodeCamp Portfolio',
            color: 'hsl(120, 50%, 40%)',
        },
        {
            name: 'twitter',
            href: 'twitter.com/borntofrappe',
            label: 'Twitter Profile',
            color: 'hsl(200, 80%, 60%)',
        },
        {
            name: 'github',
            href: 'https://github.com/borntofrappe',
            label: 'Github Repositories',
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


    const iconsRef = useRef()
    const icon = useSpring({
        delay: 500,
        from: { visibility: 'hidden', transform: 'scale(0)' },
        to: { visibility: 'visible', transform: 'scale(1)' },
        config: {
            mass: 1,
            tension: 400,
            friction: 30,
          },
        ref: iconsRef
     })

    const whenSaved = 3 + Math.floor(Math.random() * 2)
    useChain([savingRef, pencilRef, pencilStroke1Ref, pencilStroke2Ref, pencilStroke3Ref, pencilStroke4Ref, savingCompleteRef, savedRef, savedStrokeRef, iconsRef], [0, 1, 1, 2, 3, 4, whenSaved, whenSaved, whenSaved, whenSaved])

    return (
        <Navigation xmlns="http://www.w3.org/2000/svg" viewBox="-225 -225 450 450" width="450" height="450">
            <defs>
                <mask id="saving--mask">
                    <rect fill="hsl(0, 0%, 100%)" x="-50" y="-50" width="100" height="100" />
                    <animated.g style={pencil}>
                        <path fill="hsl(0, 0%, 0%)" d="M 12 38 l 16 0 0 -42 -8 -12 -8 12 z m 0 -37 h 16 z m 8 -15 v 2" />
                    </animated.g>
                </mask>
                <mask id="icon--mask">
                    <rect fill="hsl(0, 0%, 100%)" x="-225" y="-225" width="450" height="450" />
                    <circle fill="hsl(0, 0%, 0%)" r="50" />
                </mask>

                <mask id="text--mask">
                    <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
                    <path d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" stroke="hsl(0, 0%, 0%)" strokeWidth="6" fill="hsl(0, 0%, 0%)" />
                </mask>

                <path id="icon--path--c" d="M 0 40 a 40 40 0 0 1 0 -80 40 40 0 0 1 0 80" />
                <path id="icon--path--cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

            </defs>
            <animated.g style={savingComplete}>
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


            <g mask="url(#icon--mask)">
                {links.map(({ name, color, label, to, href }, index, { length }) => (
                    <animated.g transform="scale(1)" style={icon} key={name}>
                            <g transform={`rotate(${360 / length * index}) translate(0 ${140 * -1}) rotate(${360 / length * index * -1})`}>
                                {
                                    to
                                    ?
                                    <LinkTo aria-label={label} to={to} color={color}>
                                        <g transform="translate(-70 -70)">
                                        <svg viewBox="-50 -50 100 100" width="140" height="140">
                                            <g>
                                                <path d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" stroke="currentColor" strokeWidth="6" fill="none" />
                                                <g mask="url(#text--mask)" transform={`rotate(${360 / length * index})`}>
                                                    <g className="text">
                                                        <text textAnchor="middle" fontSize="14">
                                                            <textPath href={(360 / length * index > 90 && 360 / length * index < 270) ? '#icon--path--cc' : '#icon--path--c'} startOffset="50%">{name}</textPath>
                                                        </text>
                                                    </g>
                                                </g>
                                                <g transform="scale(0.35) translate(-50 -50)">
                                                    <Icon icon={name} />
                                                </g>
                                                <circle r="50" opacity="0" />
                                            </g>
                                        </svg>
                                        </g>
                                    </LinkTo>
                                    :
                                    <LinkHref aria-label={label} href={href} color={color}>
                                        <g transform="translate(-70 -70)">

                                        <svg viewBox="-50 -50 100 100" width="140" height="140">
                                            <g>
                                                <path d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" stroke="currentColor" strokeWidth="6" fill="none" />
                                                <g mask="url(#text--mask)" transform={`rotate(${360 / length * index})`}>
                                                    <g className="text">
                                                        <text textAnchor="middle" fontSize="14">
                                                            <textPath href={(360 / length * index > 90 && 360 / length * index < 270) ? '#icon--path--cc' : '#icon--path--c'} startOffset="50%">{name}</textPath>
                                                        </text>
                                                    </g>
                                                </g>
                                                <g transform="scale(0.35) translate(-50 -50)">
                                                        <Icon icon={name} />
                                                </g>
                                                <circle r="50" opacity="0" />
                                            </g>
                                        </svg>
                                        </g>
                                    </LinkHref>
                                }
                            </g>
                    </animated.g>
                    )
                )}
            </g>
        </Navigation>
    )
}