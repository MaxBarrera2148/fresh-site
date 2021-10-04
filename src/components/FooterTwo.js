import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {footer, btns, contact} from "./FooterTwo.module.css"

import { Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import GoBack from './BackBtn'


const FooterTwo = () => {
    return (
<div className={footer}>
        <div className={btns}>
            <div >
                <GoBack/>
            </div>
            <div className="d-flex justify-content-end">
                <Button id="override" className={contact}>
                    Contact Us
                </Button>
            </div>
        </div>
        <div>
            <StaticImage
        src="C:\Users\HP\Desktop\fresh-site\assets\iov_decoration.svg"
        alt="decoration"
        placeholder="blurred"
        />
        </div>
</div>


    )
}

export default FooterTwo