import icon from './projects-icon'

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      },
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'lien',
      title: 'Lien de la vidéo',
      type: 'url',
      validation: Rule => [
        Rule.required(),
        Rule.regex(/^https?:\/\/vimeo.com\/[0-9]+/i).error('Ask @matthieudou if you want to add youtube or something else')
      ]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: Rule => [
        Rule.required()
      ]
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => [
        Rule.required()
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'slug.current'
    }
  }
}
