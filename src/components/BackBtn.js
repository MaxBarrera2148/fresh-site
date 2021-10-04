import React from "react";
import { navigate} from "gatsby";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"

export default function GoBack() {

  return (  
        <Button style={{textDecoration: "none", outline: "0", color: "grey", display: "flex", alignItems: "flex-start"}} variant="link" onClick={() => navigate(-1)}>
        <FontAwesomeIcon style={{marginTop: "5px", marginRight: "4px"}} icon={faLongArrowAltLeft}/> 
            <p>Go Back</p>
        </Button>   
  );
}