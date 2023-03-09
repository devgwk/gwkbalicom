// ./src/desk-structure/index.js

import parentChild from './parentChild'

export default () =>  {

  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products'),
      parentChild('category'),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
    ])

}

  