import React from "react"

import { Button } from "../core/Button"

const UploadPreview = ({ file, removeFile, index }) => (
  <div style={{ display: `flex`, alignItems: `center` }}>
    <img
      style={{
        height: 100,
        width: 100,
        margin: 0,
        objectFit: `contain`,
      }}
      src={file.url}
      alt={`An uploaded file preview called ${file.filename}`}
    />
    <div>
      <div>{file.filename}</div>
      <div>
        <Button
          variant="GHOST"
          size="S"
          type="button"
          onClick={() => removeFile(index)}
        >
          Remove
        </Button>
      </div>
    </div>
  </div>
)

export default UploadPreview
