import React from 'react'
import { Meta } from '@storybook/react'
import { Formik, Form } from 'formik'

import { BaseInput, BaseInputProps } from './BaseInput'

export default {
  title: 'BaseInput',
  component: BaseInput,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    style: { control: 'object' },
    inputStyle: { control: 'object' },
    labelStyle: { control: 'object' }
  }
} as Meta<BaseInputProps>

const DefaultTemplate = (args: BaseInputProps) => (
  <Formik
    initialValues={{ [args.name]: '' }}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2))
    }}
  >
    {() => (
      <Form>
        <BaseInput {...args} />
        <button type='submit'>Submit</button>
      </Form>
    )}
  </Formik>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
  label: 'Name',
  name: 'name'
}

export const CustomStyles = DefaultTemplate.bind({})
CustomStyles.args = {
  label: 'Email',
  name: 'email',
  inputStyle: { borderColor: 'blue', borderWidth: 2 },
  labelStyle: { color: 'green' }
}
