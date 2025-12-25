import { Field } from 'payload'

export const localizedTextField = (name: string, required?: boolean): Field => {
  return {
    name,
    type: 'text',
    required,
    localized: true,
  }
}
