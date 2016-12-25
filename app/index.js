import angular from 'angular'

const CommonModule = angular.module('common', [])
  .service('BookmarksModel', BookmarksModel)
  .service('CategoriesModel', CategoriesModel);

export default CommonModule;


var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
