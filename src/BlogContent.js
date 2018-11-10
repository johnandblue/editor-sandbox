import React from 'react';
import MediumComponent from './MediumComponent';
import './BlogContent.css';


const BlogContent = props => (
  <MediumComponent
    content={ props.content }
    onChangeComponent={ props.onChangeContent }
  />
);

export default BlogContent;
