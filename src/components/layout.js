/** @jsx jsx */
/* eslint-disable jsx-a11y/no-autofocus, react/jsx-no-target-blank */
import { jsx } from "theme-ui"
import React from "react"
import Header from "./Header"



class Layout extends React.Component {
  render() {
    const { children,} = this.props
  

    return (
      <>
     <Header/>
     <div style={{display: "flex", justifyContent: "center", alignContent: "center", }}>
    
        <div
          style={{
            background: "white",
          }}
        >
          <main
            sx={{
              mx: `auto`,
            // maxWidth: rhythm(30),
              maxWidth: 750,
              minWidth: "55vw",
              px: [2, 4],
              py: [3],
            }}
          >
            {children}
          </main>
        </div>
      </div> 
      </>
    )
  }
}

export default Layout