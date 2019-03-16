import React from 'react'

const Rainbow=(WrappedComponent)=>
{
    const colors=['red','blue','green','yellow','black'];
    const RandomColor=colors[Math.floor(Math.random()*5)];
    const className=RandomColor+'-text';
    return (props)=>
    {
        return(
            <div className={className}>
                <WrappedComponent {...props}/> 

            </div>
        )
    }


}
export default Rainbow