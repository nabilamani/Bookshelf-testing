const {
  tambahbukuhandler,
  dapatsemuabukuhandler,
  dapatbukuidhandler,
  rubahbukuolehandler,
  hapusbukuhandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahbukuhandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: dapatsemuabukuhandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: dapatbukuidhandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: rubahbukuolehandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusbukuhandler,
  },
];

module.exports = routes;
