const products = [
  {
    name: 'Jacket',
    images: ['https://i.imgur.com/gJ5WdCb.jpg','https://i.imgur.com/gg43pzm.jpg','https://i.imgur.com/gg43pzm.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Men','Jacket'],
    sizes: ['S','XS'],
    price: 89.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Another product',
    images: ['https://i.imgur.com/vN2y3Sh.jpg','https://i.imgur.com/vN2y3Sh.jpg','https://i.imgur.com/vN2y3Sh.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Shoes','Men'],
    sizes: ['S','XS'],
    price: 599.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Example',
    images: ['https://i.imgur.com/X3sshLQ.jpg','https://i.imgur.com/X3sshLQ.jpg','https://i.imgur.com/X3sshLQ.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Shoes','Men'],
    sizes: ['S','XS'],
    price: 929.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Buy this please',
    images: ['https://i.imgur.com/7AIhl9Y.jpg','https://i.imgur.com/7AIhl9Y.jpg','https://i.imgur.com/7AIhl9Y.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Watches','Men'],
    sizes: ['S','XS'],
    price: 399.99,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'lorem lipsum',
    images: ['https://i.imgur.com/26Vuebt.jpg','https://i.imgur.com/26Vuebt.jpg','https://i.imgur.com/26Vuebt.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Women','jacket'],
    sizes: ['S','XS'],
    price: 49.99,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Some title',
    images: ['https://i.imgur.com/FqUJLMq.jpg','https://i.imgur.com/3k5mDDN.jpg','https://i.imgur.com/iWpQlso.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Women'],
    sizes: ['S','XS'],
    price: 29.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Some Product',
    images: ['https://i.imgur.com/qU9avme.jpg','https://i.imgur.com/usDXEF8.jpg','https://i.imgur.com/hmLilCy.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Jacket','Men'],
    sizes: ['S','XS'],
    price: 19.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Some Product we',
    images: ['https://i.imgur.com/2zcsO2C.jpg','https://i.imgur.com/PsxB6lI.jpg','https://i.imgur.com/OfaTKXp.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Jacket'],
    sizes: ['S','XS'],
    price: 19.99,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Some Product we',
    images: ['https://i.imgur.com/QN2BSdJ.jpg','https://i.imgur.com/XPb2MDt.jpg','https://i.imgur.com/RA2eY23.jpg'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    category: ['Bag','Women'],
    sizes: ['S','XS','L','XL'],
    price: 50.66,
    countInStock: 9,
    rating: 0,
    numReviews: 0,
  },
  
]

export default products
