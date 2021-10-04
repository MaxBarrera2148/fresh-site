/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import StepOne from "../components/StepOne"
import Footer from "../components/Footer"

class HelpCenterIndex extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title={this.props.data.site.siteMetadata.title}
        description={this.props.data.site.siteMetadata.description}
      >
     <StepOne/>

        <SEO title={this.props.data.site.siteMetadata.title} skipSuffix />
        {this.props.data.collections.edges.map(({ node }, index) => {


          return (
            <>
            <Link
              key={node.id}
              sx={{
                boxShadow: `none`,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "none",
                },
              }}
              to={node.fields.slug}
            >
              <article
                sx={{
                  backgroundColor: "paperBackgroundColor",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "paperBorderColor",
                  py: 3,
                  px: 2,
                  position: "relative",
                  zIndex: "3",
                  textDecoration: "none",
                  overflow: "hidden",
                  width: "100%",
                  display: "flex",
                  flexDirection: ["column", "row-reverse"],
                  outline: "none",
                  mt: index === 0 ? 5 : 0,
                  mb:
                    index === this.props.data.collections.edges.length - 1
                      ? 5
                      : 0,
                  boxShadow: "0 3px 8px 0 rgba(0,0,0,0.03)",
                  transition:
                    "border .15s linear, transform .15s linear, background-color .15s linear, box-shadow .15s linear, opacity .15s linear, transform .15s linear, box-shadow .15s linear",
                  color: "paperHeadingColor",
                  "&:hover": {
                    border: "1px solid rgba(136,149,162,0.2)",
                    backgroundColor: "paperHoverBackgroundColor",
                    color: "paperHoverHeadingColor",
                  },
                }}
              >
                <div
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: ["center"],
                    px: [4, 2],
                    pb: [3, 0],
                  }}
                >
               <FontAwesomeIcon icon={faChevronRight} /> 
                </div>
                <div sx={{ flex: "6", px: [2, 0] }}>
                  <header>
                    <h3
                      sx={{
                        mt: 0,
                        mb: 2,
                        px: [2, 4],
                        color: "inherit",
                      }}
                    >
                      {node.title}
                    </h3>
                  </header>
                  <section
                    sx={{
                      color: "paperDescriptionColor",
                    }}
                  >
                  
                  </section>
              
                </div>
              </article>
            </Link>
            </>
          )
         
        })}
        <Footer/>
      </Layout>
    )
  }
}

export default HelpCenterIndex

export const pageQuery = graphql`
  fragment IndexArticleFragment on File {
    childMarkdownRemark {
      id
    }
  }
  query {
    site {
      siteMetadata {
        title
        description
        texts {
          articlesInCollectionZeroText
          articlesInCollectionOneText
          articlesInCollectionTwoText
          articlesInCollectionMultipleText
        }
      }
    }
    collections: allCollectionsYaml {
      edges {
        node {
          id
          title
          icon
          description
          articles {
            file {
              ...IndexArticleFragment
            }
          }
          sections {
            articles {
              file {
                ...IndexArticleFragment
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
