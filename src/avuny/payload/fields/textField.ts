import { Field } from 'payload'

export const localizedTextField = (name: string, required?: boolean): Field => {
  return {
    name,
    type: 'text',
    required,
    localized: true,
  }
}

export const localizedTextAreaField = (name: string, required?: boolean): Field => {
  return {
    name,
    type: 'textarea',
    required,
    localized: true,
  }
}
export const localizedRichTextField = (name: string, required?: boolean): Field => {
  return {
    name,
    type: 'richText',
    required,
    localized: true,
  }
}
