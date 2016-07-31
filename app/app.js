var app = angular.module('app', ['contentful']);

app.config(function(contentfulProvider) {
  contentfulProvider.setOptions({
    space: '4kze14vvvqum',
    accessToken: '6c803bb3d4c81de589ee908abd23394a95697c9e2bf40c207ec9eb500fdffd77'
  });
});

app.controller('MainController', function(contentful) {
  // Get all entries
  contentful
    .entries()
    .then(
      // Success handler
      function(response) {
        var entries = response.data;
        console.log(entries);
      },

      // Error handler
      function(response) {
        console.log('Oops, error ' + response.status);
      }
    );
  $(document).foundation();
});
