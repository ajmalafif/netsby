import React from 'react'
import {Link} from 'gatsby'

const ArticleList = ({posts}) => {
  return (
    <div>
      {posts
        .map(({ node: post }) => (
          <div className="w-70-ns mb4 mb5-ns" key={post.id}>
            <h3 className="lh-title mb2 blue mt0">
              <Link className="link fw6" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </h3>
            <p className="lh-copy mt1 mb2">
              {post.excerpt}
            </p>
            <p className='mb2 mt3'>
            <Link className="link mid-gray" to={post.fields.slug}>
            Continue reading →
            </Link>
            </p>
            <small className="mid-gray lh-copy">{post.frontmatter.date}{post.frontmatter.author}</small>
          </div>
        ))}
    </div>
  )
}

export default ArticleList