const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { useStaticQuery } = require("gatsby")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async function ({ actions, graphql }) {
    const { createPage } = actions
    const result  = await graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `)
        
    result.data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.fields.slug

        createPage({
            path: slug,
            component: path.resolve(`./src/templates/posts.js`),
            context: {
                slug: slug,
            },
        })
    })
}