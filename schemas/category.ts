import { BiFolder } from "react-icons/bi";
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: BiFolder,
    fields: [
        { name: 'title', type: 'string' },
        {
            name: 'parent',
            type: 'reference',
            to: [{ type: 'category' }],
            // This ensures we cannot select other "children"
            options: {
                filter: '!defined(parent)',
            },
        },
    ],
    // Customise the preview so parents are visualised in the studio
    preview: {
        select: {
            title: 'title',
            subtitle: 'parent.title',
        },
        prepare: ({ title, subtitle }) => ({
            title,
            subtitle: subtitle ? `– ${subtitle}` : ``,
        }),
    },
})