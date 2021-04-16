import React, { useState } from 'react';
import TextArea from 'components/atoms/TextArea';

const QueryEditor = props => {
  const { editorTheme, setEditorTheme } = useState('light');
  return (
      <>
        <TextArea theme={editorTheme}/>
      </>
  );
};

export default QueryEditor;

