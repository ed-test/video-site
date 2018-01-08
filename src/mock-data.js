const shows = [
  {
    id: '1',
    title: 'Gold Rush',
    thumbnail:
      'https://api.discovery.com/v1/images/5a4bf6636b66d17a5026ec71?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://res.cloudinary.com/discovery-go/image/upload/c_crop,w_3587,h_2019,x_414,y_329/c_fill,w_1400,h_788,q_auto/v1505836953/Gold-Rush-SN8-art-DISC.jpg',
    genre: 'Documentary',
    related: ['2'],
  },
  {
    id: '2',
    title: 'Killing Fields',
    thumbnail:
      'https://res.cloudinary.com/discovery-go/image/upload/c_crop,w_1920,h_1082,x_0,y_0/c_fill,w_462,h_260,q_auto/v1515082810/159139.001v2.jpg',
    image:
      'https://api.discovery.com/v1/images/591b3a506b66d1822824f32d?aspectRatio=16x9&width=1400&key=3020a40c2356a645b4b4',
    related: ['1'],
    genre: 'Action',
  },
  {
    id: '3',
    title: 'Street Outlaws',
    thumbnail:
      'https://api.discovery.com/v1/images/5a4a69d46b66d17a5026ebf5?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://api.discovery.com/v1/images/58c2dbc56b66d12f2addebe4?aspectRatio=16x9&width=1400&key=3020a40c2356a645b4b4',
    related: ['1'],
    genre: 'Action',
  },
  {
    id: '4',
    title: 'The Interrogation Room',
    thumbnail:
      'https://api.discovery.com/v1/images/5a4e7af06b66d1044815e130?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://res.cloudinary.com/discovery-go/image/upload/c_crop,w_3587,h_2019,x_414,y_329/c_fill,w_1400,h_788,q_auto/v1505836953/Gold-Rush-SN8-art-DISC.jpg',
    related: ['1'],
    genre: 'Documentary',
  },
  {
    id: '5',
    title: 'Moonshiners',
    thumbnail:
      'https://api.discovery.com/v1/images/5a133d116b66d173d335308e?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://api.discovery.com/v1/images/59f78a6d6b66d14ccb00e82c?aspectRatio=16x9&width=1400&key=3020a40c2356a645b4b4',
    related: ['1'],
    genre: 'Documentary',
  },
  {
    id: '6',
    title: 'Cash Cab',
    thumbnail:
      'https://api.discovery.com/v1/images/5a31725f6b66d17a5026e3a1?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://res.cloudinary.com/discovery-go/image/upload/c_crop,w_3587,h_2019,x_414,y_329/c_fill,w_1400,h_788,q_auto/v1505836953/Gold-Rush-SN8-art-DISC.jpg',
    related: ['1'],
    genre: 'Documentary',
  },
  {
    id: '7',
    title: 'The Ballod of Parker and Todd',
    thumbnail:
      'https://api.discovery.com/v1/images/59f0fbf66b66d15d3b0ad989?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://res.cloudinary.com/discovery-go/image/upload/c_crop,w_3587,h_2019,x_414,y_329/c_fill,w_1400,h_788,q_auto/v1505836953/Gold-Rush-SN8-art-DISC.jpg',
    related: ['1'],
    genre: 'Action',
  },
  {
    id: '8',
    title: 'Naked and Afraid',
    thumbnail:
      'https://api.discovery.com/v1/images/599484796b66d13032356180?aspectRatio=16x9&width=462&key=3020a40c2356a645b4b4',
    image:
      'https://api.discovery.com/v1/images/591b3a506b66d1822824f32d?aspectRatio=16x9&width=1400&key=3020a40c2356a645b4b4',
    related: ['1'],
    genre: 'Action',
  },
];

const filters = ['All', 'Action', 'Documentary'];

export { filters, shows };
