import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const figure = defineType({
  name: 'figure',
  title: 'Slide image',
  type: 'image',
  icon: ImageIcon,
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Describe what matters in this image for visitors who cannot see it.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      description: 'Optional short caption displayed with the image.',
    }),
  ],
})
