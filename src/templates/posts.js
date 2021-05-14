import { graphql } from 'gatsby'
import React from 'react'

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h4 style={{color: 'rgb(165, 164, 164'}}>{post.frontmatter.author}</h4>
            <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
        </div>
    )
};


export const query = graphql`
    query Postquery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                author
                date
            }
        }
}`
