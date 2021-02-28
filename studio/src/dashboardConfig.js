export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603bca6a060121ad6d536a8b',
                  title: 'Sanity Studio',
                  name: 'studio-studio',
                  apiId: '5debc92f-73c0-4d4e-b906-3c80a55a913f'
                },
                {
                  buildHookId: '603bca6bd579f1b1317c7573',
                  title: 'Blog Website',
                  name: 'studio-web-oprxnx7m',
                  apiId: '75148446-b074-4bbe-b2e6-316cefa78081'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajmalafif/studio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://studio-web-oprxnx7m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
