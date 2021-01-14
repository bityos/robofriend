import React from 'react'

export const SearchBox = ({ filterRobots, searchChange }) => {
    return (
        <div className='pa2'>
            <input
            aria-label='search Robots'
            className='pa3 b3 b--green bg-lightest-blue'
            type='searchBox'
            placeholder='search robots here'
            onChange={searchChange}
            />
        </div>
    )
}