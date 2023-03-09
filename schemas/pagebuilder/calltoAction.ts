import { defineField, defineType } from 'sanity'

export default defineType({

  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    defineField(
      {
        name: 'linkText',
        type: 'string',
        title: 'Link Text'
      }),
    (
      {
        name: 'url',
        type: 'string',
        title: 'URL'
      }
    )
  ]
})