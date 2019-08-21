import React from "react"

import { storiesOf } from "@storybook/react"

import FileUpload from "./FileUpload"

storiesOf(`Single File Upload`, module)
  .add(`Default`, () => {
    const setFieldValue = props => {
      console.log(props)
    }
    return (
      <>
        <FileUpload name="file" setFieldValue={setFieldValue} />
      </>
    )
  })
  .add(`Multi File Upload`, () => {
    const setFieldValue = props => {
      console.log(props)
    }
    return (
      <>
        <FileUpload
          multi={true}
          name="file"
          setFieldValue={setFieldValue}
          fileTypes={[`image/jpeg`]}
        />
      </>
    )
  })
  .add(`File Upload with Custom Components`, () => {
    const setFieldValue = props => {
      console.log(props)
    }
    return (
      <>
        <FileUpload
          multi={false}
          name="file"
          setFieldValue={setFieldValue}
          fileTypes={[`image/jpeg`]}
          CustomButtonComponent={({ onPick }) => (
            <button type="button" onClick={onPick}>
              Custom Button
            </button>
          )}
          CustomPreviewComponent={({ file, index, removeFile }) => (
            <div>
              <span>{file.filename}</span>
              <button type="button" onClick={() => removeFile(index)}>
                X
              </button>
            </div>
          )}
        />
      </>
    )
  })
