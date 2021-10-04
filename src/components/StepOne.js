import React from 'react'
import Progress from "../components/Progress"

const StepOne = () => {
    return (
       <section>
            <div style={{display: 'flex', justifyContent: "space-between", marginTop: "3rem"}}>
                <div >
                <h3>Contact IOVLABS</h3>
                </div>
                <div>
                    <p>STEP 1</p>
                </div>
            </div>
            <div>
                    <Progress done="33"/>
            </div>
            <div>
                <h1>Hello. How can we help you?</h1>
                <p>Please select an article test</p>
            </div>
        </section>
    )
}

export default StepOne
