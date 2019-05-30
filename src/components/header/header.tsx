import React from "react"
import styles from "./header.module.scss" // Why is this red?
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Header = () => (
  <header>
    <div className={styles.header}>
      <div className={styles.row}>


        <StaticQuery
          query={graphql`
            query indexQuery {
              fileName: file(relativePath: { eq: "logo-black.png" }) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

  
          `}


          render={data => (
            <>
              <Img
                fluid={data.fileName.childImageSharp.fluid}
                className={styles.logo}
              />
            </>
          )}
        />

      </div>
    </div>
  </header>
)

export default Header
