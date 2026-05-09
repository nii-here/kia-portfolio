import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Small Heading',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
    }),
    defineField({
      name: 'paragraphOne',
      title: 'First Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'paragraphTwo',
      title: 'Second Paragraph',
      type: 'text',
    }),
  ],
})