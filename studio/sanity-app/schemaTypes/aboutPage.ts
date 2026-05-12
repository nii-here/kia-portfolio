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
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
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
    defineField({
      name: 'paragraphThree',
      title: 'Third Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'tools',
      title: 'Tools / Platforms',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})