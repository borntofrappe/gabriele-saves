import React from "react"
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Heading = styled(animated.h1)`
    font-family: monospace;
`


export default () => {
    const props = useSpring({ opacity: 1, from : { opacity: 0 }})

    return (<>
        <Heading style={props}>Setting things up</Heading>
    </>
    )
}