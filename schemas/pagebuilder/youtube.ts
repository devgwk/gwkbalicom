import { defineField, defineType } from 'sanity'


export default defineType({

  name: "youtube",
  type: "object",
  title: "YouTube Video",
  fields: [
    defineField({
      name: 'youtubelabel',
      type: 'string',
      title: 'Label'
    }),
    (
      {
        name: 'url',
        type: 'string',
        title: 'YouTube URL'
      }
    )
  ],  
})

