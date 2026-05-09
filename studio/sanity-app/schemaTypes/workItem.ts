import {defineField, defineType} from 'sanity'

export const workItem = defineType({
  name: 'workItem',
  title: 'Work Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Newsletter', 'Graphics', 'Writing', 'Policy', 'Media'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'impact',
      title: 'Impact / Result',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Work',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})