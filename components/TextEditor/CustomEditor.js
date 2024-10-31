"use client"; // only in App Router
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useState } from "react";

function CustomEditor({ handleEditorChange }) {
  const [text, setText] = useState("");

  //   const handleEditorChange = (event, editor) => {
  //     const data = editor.getData();
  //     setText(data);
  //   };
  return (
    <CKEditor
      editor={ClassicEditor}
      data={text}
      onChange={handleEditorChange}
      config={{
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "|",
          "undo",
          "redo",
        ],
      }}
      style={{ height: "500px" }} // Tässä voit säätää korkeuden haluamaksesi
    />
  );
}

export default CustomEditor;
