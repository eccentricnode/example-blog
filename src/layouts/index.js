import React from 'react'
import Proptypes from 'proptypes'
import helmet from 'react-helmet'
import Header from "../components/Header"
import './index.css'

const TemplateWrapper = ({ children }) = (
    <div>
        <Helmet
            title = "The Grey Web Blog"
            meta = {[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something'}
            ]}
        />
        <Header />
        <div
            style = {{
                margin: '0 auto',
                maxWidth: 960, 
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0
            }}
        >
            {children()}
        
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper