// import { UserIcon } from '@sanity/icons'
import { BiUser } from "react-icons/bi";
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  icon: BiUser,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})
