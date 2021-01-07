import React from 'react'

export const Scroll = (props) => {
    return (
        <div
            style={
                {
                    overflow: 'scroll',
                    border: '5px solid black',
                    height: '610px'
                }
            }>
            {props.children}
        </div>
    )
}