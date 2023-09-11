import React from "react"

export const useDebugInformation = (componentName, props) => {
    const changedProps = React.useRef({})
    const previousProps = React.useRef(props)
    const lastRenderTimestamp = React.useRef(Date.now())

    const propKeys = Object.keys({ ...props, ...previousProps })
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj
        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] },
        }
    }, {})
    const info = {
        props,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current,
    }

    React.useEffect(() => {
        previousProps.current = props
        lastRenderTimestamp.current = Date.now()
        console.info("[debug-info]", componentName, info)
    }, [])

    return info
}