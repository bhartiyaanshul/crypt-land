import React from 'react'


export const Plans = ({plans}) => {
    

  return (
    <div>
        <div>
            <div>{plans.type}</div>
            <div>{plans.price}</div>
            <div>{plans.description}</div>
            <div>{plans.features}</div>
        </div>
    </div>
  )
}


