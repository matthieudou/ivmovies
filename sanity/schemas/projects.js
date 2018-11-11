import icon from './projects-icon'

export default {
  name: 'projects',
  title: 'Projets',
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
      name: 'release_date',
      title: 'Date de sortie de la vidéo',
      type: 'date',
      options: {
        dateFormat: 'DD/MM/YYYY',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => [
        Rule.required()
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
    {
      name: 'video_link',
      title: 'Lien de la vidéo',
      type: 'url',
      validation: Rule => [
        Rule.required(),
        Rule.regex(/^https?:\/\/vimeo.com\/[0-9]+/i).error('Ask @matthieudou if you want to add youtube or something else')
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      subtitle: 'slug.current'
    }
  }
}
