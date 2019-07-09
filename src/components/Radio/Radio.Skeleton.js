import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"
import { MdRefresh } from "react-icons/md"
import { Link } from "gatsby"

const SkeletonStyledContainer = styled(`div`)``
const SkeletonStyledInput = styled(`input`)``
const SkeletonStyledLabel = styled(`label`)``

export const radioPropTypes = {
  label: PropTypes.string,
  InnerLabelComponent: PropTypes.func,
  htmlLabel: PropTypes.any,
  fieldName: PropTypes.string.isRequired,
  id: PropTypes.string,
  optionValue: PropTypes.any,
  value: PropTypes.any.isRequired,
}

export const radioSkeletonPropTypes = {
  ...radioPropTypes,
  StyledContainer: PropTypes.any,
  StyledInput: PropTypes.any,
  StyledLabel: PropTypes.any,
}

const radioSkeletonDefaultPropTypes = {
  StyledContainer: SkeletonStyledContainer,
  StyledInput: SkeletonStyledInput,
  StyledLabel: SkeletonStyledLabel,
}

export function RadioSkeleton({
  StyledContainer,
  StyledInput,
  StyledLabel,
  label,
  InnerLabelComponent,
  fieldName,
  id,
  optionValue,
  value,
  className,
  children,
  onChange,
  ...rest
}) {
  return (
    <StyledContainer
      className={`${optionValue === value ? `selected` : ``} ${className}`}
    >
      <StyledInput
        type="radio"
        name={fieldName}
        id={id}
        value={optionValue}
        checked={optionValue === value}
        onChange={onChange}
        {...rest}
      />
      {(label || InnerLabelComponent) && (
        <StyledLabel htmlFor={id}>
          {InnerLabelComponent ? <InnerLabelComponent /> : label}
        </StyledLabel>
      )}
      {children}
    </StyledContainer>
  )
}

RadioSkeleton.propTypes = radioSkeletonPropTypes
RadioSkeleton.defaultProps = radioSkeletonDefaultPropTypes

export default RadioSkeleton
