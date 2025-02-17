import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Vimeo video URL',
    }),
  ],
  preview: {
    select: {title: 'url'},
  },
})