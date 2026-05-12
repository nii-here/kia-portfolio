import {defineField, defineType} from 'sanity'

// Work Item schema
// Controls all editable portfolio projects inside Sanity CMS
export const workItem = defineType({

  // Internal schema name
  name: 'workItem',

  // Display name shown in Sanity Studio
  title: 'Work Item',

  // This schema creates a document
  // Each document represents one portfolio project/work item
  type: 'document',

  // List of editable project fields
  fields: [

    // Project title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    // URL slug
    // Used for dynamic project pages
    // Example:
    // /work/community-newsletter
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      // Automatically generate slug from project title
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    // Project category
    // Dropdown selection field
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',

      // Available category options
      options: {
        list: ['Newsletter', 'Graphics', 'Writing', 'Policy', 'Media'],
      },
    }),

    // Short description
    // Used on portfolio cards / previews
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),

    // Full project description
    // Used on the individual project details page
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    }),

    // Image gallery field
    // Allows multiple uploaded graphics/images per project
    defineField({
      name: 'gallery',
      title: 'Project Graphics / Gallery',
      type: 'array',

      // Array of image objects
      of: [
        {
          type: 'image',

          // Enables better cropping control in Sanity
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
        },
      ],
    }),

    // Role section
    // Example:
    // "Lead designer and content strategist"
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    // Impact / results section
    // Example:
    // "Improved engagement by 25%"
    defineField({
      name: 'impact',
      title: 'Impact / Result',
      type: 'text',
    }),

    // Optional external project URL
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),

    // Featured project toggle
    // Featured projects appear first on the Work page
    defineField({
      name: 'featured',
      title: 'Featured Work',
      type: 'boolean',

      // Default value when creating a new project
      initialValue: false,
    }),
  ],
})