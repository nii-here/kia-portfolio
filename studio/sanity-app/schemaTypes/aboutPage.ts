import {defineField, defineType} from 'sanity'

// About Page schema
// Controls all editable content for the About page inside Sanity CMS
export const aboutPage = defineType({

  // Internal schema name
  name: 'aboutPage',

  // Display name shown inside Sanity Studio
  title: 'About Page',

  // This schema creates a document
  // A document is a full editable page/content entry
  type: 'document',

  // List of editable fields for the About page
  fields: [

    // Small heading above the main title
    defineField({
      name: 'eyebrow',
      title: 'Small Heading',
      type: 'string',
    }),

    // Main About page headline
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
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

      // Additional fields attached to the image
      fields: [

        // Alt text improves accessibility and SEO
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),

      ],
    }),

    // First About paragraph
    defineField({
      name: 'paragraphOne',
      title: 'First Paragraph',
      type: 'text',
    }),

    // Second About paragraph
    defineField({
      name: 'paragraphTwo',
      title: 'Second Paragraph',
      type: 'text',
    }),

    // Third About paragraph
    defineField({
      name: 'paragraphThree',
      title: 'Third Paragraph',
      type: 'text',
    }),

    // Focus Areas section
    // Example:
    // - Policy Writing
    // - Community Outreach
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas',
      type: 'array',

      // Array of text items
      of: [{type: 'string'}],
    }),

    // Tools / platforms section
    // Example:
    // - Canva
    // - Mailchimp
    defineField({
      name: 'tools',
      title: 'Tools / Platforms',
      type: 'array',

      // Array of text items
      of: [{type: 'string'}],
    }),

    // Quick Facts section
    // Example:
    // - Based in Chicago
    // - Interested in policy communication
    defineField({
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',

      // Array of text items
      of: [{type: 'string'}],
    }),
  ],
})