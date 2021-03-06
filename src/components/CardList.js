import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
    return (
        <div className='tc'>
            {
                robots.map((usr, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )
}