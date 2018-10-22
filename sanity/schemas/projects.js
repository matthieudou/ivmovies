import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'projects',
  title: 'Projets',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'lien',
      title: 'Lien de la vidéo',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
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
