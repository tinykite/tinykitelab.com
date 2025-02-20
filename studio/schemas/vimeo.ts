import {defineType, defineField} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export default defineType({
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Vimeo video id',
    }),
  ],
  preview: {
    select: {title: 'id'},
  },
})