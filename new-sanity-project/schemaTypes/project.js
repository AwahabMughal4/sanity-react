export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Date',
      },
      {
        name: 'place',
        type: 'string',
        title: 'Place',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'projectType',
        title: 'Project type',
        type: 'string',
        options: {
          list: [
            { title: 'Personal', value: 'personal' },
            { title: 'School', value: 'school' },
            { title: 'Client', value: 'client' },
          ],
        },
      },
      {
        name: 'link',
        type: 'url',
        title: 'Link',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags',
        },
      },
    ],
  }
  