import {defineField, defineType} from 'sanity'

// Contact Page schema
// Controls editable content for the Contact page inside Sanity CMS
export const contactPage = defineType({

  // Internal schema name
  name: 'contactPage',

  // Display name shown in Sanity Studio
  title: 'Contact Page',

  // This schema creates a document
  // A document represents a full editable page
  type: 'document',

  // List of editable fields
  fields: [

    // Small heading shown above the main title
    defineField({
      name: 'smallHeading',
      title: 'Small Heading',
      type: 'string',
    }),

    // Main Contact page headline
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
    }),

    // Intro paragraph / supporting text
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),

    // Email address field
    // Used for the clickable email card on the frontend
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),

    // LinkedIn profile URL
    // Used for the LinkedIn contact card
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
})