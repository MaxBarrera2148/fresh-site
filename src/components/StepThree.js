import React from 'react'
import Progress from './Progress'

const StepThree = () => {
    return (
        <section>
            <div style={{display: 'flex', justifyContent: "space-between", marginTop: "3rem"}}>
                <div >
                <h3>Contact IOVLABS</h3>
                </div>
                <div>
                    <p>STEP 3</p>
                </div>
            </div>
            <div>
                    <Progress done="100"/>
            </div>
        </section>    

    )
}

export default StepThree