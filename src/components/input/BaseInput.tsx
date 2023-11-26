import React, { useRef, useEffect } from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

interface BaseInputProps {
  label?: string
  name: string
  style?: React.CSSProperties
  inputStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
}

const BaseInput: React.FC<BaseInputProps> = ({
  label,
  name,
  style,
  inputStyle,
  labelStyle
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [field, meta] = useField(name)

  useEffect(() => {
    if (meta.touched && meta.error && inputRef.current) {
      inputRef.current.focus()
    }
  }, [meta.touched, meta.error])

  return (
    <div style={style}>
      {label && <label style={labelStyle}>{label}</label>}
      <input {...field} ref={inputRef} type='text' style={inputStyle} />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
    </div>
  )
}

BaseInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object
}

export { BaseInput, BaseInputProps }
