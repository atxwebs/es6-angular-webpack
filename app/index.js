import angular from 'angular'

const CommonModule = angular.module('common', [])
  .service('BookmarksModel', BookmarksModel)
  .service('CategoriesModel', CategoriesModel);

export default CommonModule;
