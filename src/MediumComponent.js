import React from 'react';
import { Editor, createEditorState } from 'medium-draft';
import { draftToMarkdown } from 'markdown-draft-js';
import { convertToRaw } from 'draft-js'

 class MediumComponent extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      editorState: createEditorState(props.content),
    };

     this.onChange = (editorState) => {
      this.setState({ editorState }, () => {
        // const selection = editorState.getSelection();
        const content = editorState.getCurrentContent();
        const rawObject = convertToRaw(content);
        var markdownString = draftToMarkdown(rawObject);
        // const block = content.getBlockForKey(selection.getStartKey());
        // const text = block.getText();
        props.onChangeComponent(markdownString);
      });
    };
  }

   render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={ editorState }
        onChange={ this.onChange }
      />
    );
  }
}

export default MediumComponent;
