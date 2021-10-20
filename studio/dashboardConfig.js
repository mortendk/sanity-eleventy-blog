export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '616fddb72bd679c5a9042722',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6etzs3cw',
                  apiId: 'b65eb937-fd17-4611-a41c-9f7c1bdb6aca'
                },
                {
                  buildHookId: '616fddb7946bd2e1d3ba65de',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-tct15c7i',
                  apiId: 'ac27810a-6add-40ed-a26a-1bcf2e5a3c2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mortendk/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-tct15c7i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
