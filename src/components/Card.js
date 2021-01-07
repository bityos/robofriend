import React from 'react'

export const Card = ({ id, name, email }) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?10x10`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}