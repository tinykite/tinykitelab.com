import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'gridImage',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: false
              }
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            })
          ],
          preview: {
            select: {
              media: 'image',
              title: 'alt'
            }
          }
        }
      ],
      options: {
        layout: 'grid'
      }
    })
  ],
  preview: {
    select: {
      images: 'images'
    },
    prepare({images}) {
      return {
        title: 'Image Grid',
        subtitle: `${images?.length || 0} image(s)`
      }
    }
  }
})