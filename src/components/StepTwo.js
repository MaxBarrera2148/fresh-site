import React from 'react'
import Progress from "../components/Progress"


const StepTwo = () => {
    return (
       <section>
            <div style={{display: 'flex', justifyContent: "space-between", marginTop: "3rem"}}>
                <div >
                <h3>Contact IOVLABS</h3>
                </div>
                <div>
                    <p>STEP 2</p>
                </div>
            </div>
            <div>
                    <Progress done="66"/>
            </div>
            <div>
                <h1>Can you tell us a little more?</h1>
                <p>Please select a topic</p>
            </div>
        </section>
    )
}

export default StepTwo