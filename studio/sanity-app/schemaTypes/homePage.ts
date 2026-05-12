import {defineField, defineType} from 'sanity'

// Home Page schema
// Controls all editable content for the homepage inside Sanity CMS
export const homePage = defineType({

  // Internal schema name
  name: 'homePage',

  // Display name shown in Sanity Studio
  title: 'Home Page',

  // This schema creates a document
  // A document represents a full editable page
  type: 'document',

  // List of editable homepage fields
  fields: [

    // Small heading above the hero title
    defineField({
      name: 'smallHeading',
      title: 'Small Heading',
      type: 'string',
    }),

    // Main homepage headline
    defineField({
      name: 'mainHeadline',
      title: 'Main Headline',
      type: 'string',
    }),

    // Supporting hero paragraph
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    }),

    // Profile image upload field
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',

      // Hotspot allows better image cropping control
      options: {
        hotspot: true,
      },

      // Extra image-related fields
      fields: [

        // Alt text improves accessibility and SEO
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),

      ],
    }),

    // Short biography section
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
    }),

    // Highlights / focus areas section
    // Example:
    // - Policy Writing
    // - Public Communication
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',

      // Array of text items
      of: [{type: 'string'}],
    }),

    // LinkedIn profile URL
    // Used for the homepage LinkedIn button
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
})