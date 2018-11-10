import React, { Component } from 'react';

import BlogContent from './BlogContent';
// import { createNewsPage } from './api';
import './Blog.css';

class CmsCreateNewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableSubmitButton: false,
      image: '',
      entry: {
        content: '',
      },
      locale: 'en-US',
    };
  }

  handleChangeContent = (content) => {
   this.setState(prevState => ({
     entry: {
       ...prevState.entry,
       content,
     } }),
   );
 }

 submitBlog = () => {
   console.log('Entry submited: ', this.state.entry);
   // uncomment to post to api
   // createNewsPage(this.state.entry);
  }

  render() {
    return (
      <div className="blogContainer">
        <BlogContent
          className="blogContent"
          content={ this.state.entry.content }
          onChangeContent={ this.handleChangeContent }
        />
        <button
          className="button"
          onClick={ this.submitBlog }
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default CmsCreateNewsPage;
