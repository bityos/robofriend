import React from 'react'

const SearchBox = ({ filterRobots, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 b3 b--green bg-lightest-blue'
                type='searchBox'
                placeholder='search robots here'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox