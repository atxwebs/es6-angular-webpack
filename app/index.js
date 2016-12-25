// //import angular from 'angular'
// import registerDirectives from './directives';
// if (ON_TEST) {
//   require('angular-mocks/angular-mocks');
// }
//
// const ngModule = angular.module('app', []);
//
// registerDirectives(ngModule);
//
// import angular from 'angular';
// import BookmarksModel from './models/bookmarks.model';
// import CategoriesModel from './models/categories.model';

import registerDirectives from './directives';

const CommonModule = angular.module('common', [])
  .service('BookmarksModel', BookmarksModel)
  .service('CategoriesModel', CategoriesModel);

export default CommonModule;
