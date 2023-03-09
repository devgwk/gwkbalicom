// import { BookIcon } from '@sanity/icons'
import { BiNote } from "react-icons/bi";
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

//pagebuilder schema
import authorType from '../author'
import callToAction from "../pagebuilder/calltoAction"
import youTube from '../pagebuilder/youtube'

export default

  defineType({
    name: 'page',
    title: 'Page',
    icon: BiNote,
    type: 'document',
    fields: [

      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
          isUnique: (value, context) => context.defaultIsUnique(value, context),
        },
        //validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          { type: callToAction.name },
          { type: youTube.name },
          {
            type: 'image', name: 'Image', title: 'Figure',
            options: {
              hotspot: true,
            },
            fields: [
              defineField(
                {
                  name: 'altText',
                  type: 'string',
                  title: 'Alternative text'
                }
              )
              ,
            ],
          }
        ]
      }),

      defineField({
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'date',
        title: 'Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: authorType.name }],
      }),
    ],
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        date: 'date',
        media: 'coverImage',
      },
      prepare({ title, media, author, date, }) {
        const subtitles = [
          author && `by ${author}`,
          date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
        ].filter(Boolean)

        return { title, media, subtitle: subtitles.join(' ') }
      },
    },
  })
