import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
  ],
})