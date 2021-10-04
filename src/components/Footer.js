import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {footer} from "./Footer.module.css"

import { Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Footer = () => {
    return (
<Container className={footer}>

        <div>
            <StaticImage
        src="C:\Users\HP\Desktop\fresh-site\assets\iov_decoration.svg"
        alt="decoration"
        placeholder="blurred"
        />
        </div>
</Container>


    )
}

export default Footer
