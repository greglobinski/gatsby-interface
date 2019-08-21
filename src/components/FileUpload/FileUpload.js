import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import ReactFilestack from "filestack-react"

import { Button } from "../core/Button"
import UploadPreview from "./UploadPreview"

const defaultFilestackOptions = {
  accept: [`image/jpeg`, `image/png`],
  maxSize: 10 * 1024 * 1024, // 10MB
  fromSources: [`local_file_system`, `url`, `googledrive`, `dropbox`, `github`],
}

const FileUpload = ({
  actionOptions,
  CustomButtonComponent,
  CustomPreviewComponent,
  fileTypes,
  multi = false,
  name,
  setFieldValue,
  ...rest
}) => {
  const [files, setFiles] = useState([])

  const removeFile = index => {
    if (index === undefined) {
      throw new Error(
        `you must provide an index (from props) to the removeFile method in a CustomPreviewComponent, ie removeFile(index)`
      )
    }
    if (index >= files.length || index < 0) {
      throw new Error(
        `remove file failed because the index for the removed file is outside of range`
      )
    }
    files.splice(index, 1)
    setFiles([...files])
  }

  const addFiles = uploadedFiles => {
    if (multi) {
      // set multiple files to state
      const allFiles = [...files, ...uploadedFiles]
      setFiles([...allFiles])
      const fileUrls = allFiles.map(file => file.url)
      setFieldValue(name, [...fileUrls])
    } else {
      // overwrite a single file in state
      setFiles([...uploadedFiles])
      setFieldValue(name, uploadedFiles[0] && [uploadedFiles[0].url])
    }
  }

  const mock = {
    filename: `corgi.jpg`,
    handle: `i2bdWIuCS6i0DNSqG0ih`,
    mimetype: `image/jpeg`,
    originalPath: `corgi.jpg`,
    size: 146993,
    source: `local_file_system`,
    url: `https://cdn.filestackcontent.com/i2bdWIuCS6i0DNSqG0ih`,
    uploadId: `K0T75S35q5b1iV4c`,
    originalFile: {
      name: `corgi.jpg`,
      type: `image/jpeg`,
      size: 146993,
    },
    status: `Stored`,
  }
  useEffect(() => {
    addFiles([{ ...mock }])
  }, [])

  const isEmpty = !!files.length

  const buttonText = (() => {
    if (isEmpty) {
      return `Choose ${multi ? `another` : `a different`} file`
    } else {
      return `Pick file${multi ? `s` : ``}`
    }
  })()

  const renderButton = onPick => {
    // use custom component if provided
    if (CustomButtonComponent) {
      return (
        <CustomButtonComponent onPick={onPick}>
          {buttonText}
        </CustomButtonComponent>
      )
    } else {
      return (
        <Button variant="SECONDARY" size="M" onClick={onPick}>
          {buttonText}
        </Button>
      )
    }
  }

  const renderPreview = (file, index) => {
    // use custom file preview component if provided
    if (CustomPreviewComponent) {
      return (
        <CustomPreviewComponent
          key={file.uploadId}
          file={file}
          index={index}
          removeFile={removeFile}
        />
      )
    } else {
      return (
        <UploadPreview
          key={file.uploadId}
          file={file}
          index={index}
          removeFile={removeFile}
        />
      )
    }
  }

  const API_KEY =
    process.env.GATSBY_FILESTACK_API_KEY ||
    process.env.STORYBOOK_FILESTACK_API_KEY
  if (!API_KEY) {
    console.error(
      `Using the <FileUpload /> component without setting the GATSBY_FILESTACK_API_KEY will fail`
    )
  }

  return (
    <>
      <ReactFilestack
        apikey={API_KEY}
        actionOptions={{
          maxFiles: multi ? 5 : 1,
          ...defaultFilestackOptions,
          ...actionOptions,
          accept: fileTypes && [...fileTypes],
        }}
        onSuccess={result => {
          addFiles(result.filesUploaded)
        }}
        customRender={({ onPick }) => renderButton(onPick)}
        {...rest}
      />
      {isEmpty && files.map((file, index) => renderPreview(file, index))}
    </>
  )
}

FileUpload.propTypes = {
  actionOptions: PropTypes.shape({
    accept: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    maxSize: PropTypes.number,
    fromSources: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  CustomButtonComponent: PropTypes.func,
  CustomPreviewComponent: PropTypes.func,
  fileTypes: PropTypes.arrayOf(
    PropTypes.oneOf([
      `.pdf`,
      `image/jpeg`,
      `image/png`,
      `image/*`,
      `video/*`,
      `audio/*`,
      `application/*`,
      `text/*`,
    ])
  ),
  multi: PropTypes.bool,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
}

export default FileUpload
