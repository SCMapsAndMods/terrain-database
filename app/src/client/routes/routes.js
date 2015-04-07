Router.configure({
  layoutTemplate: 'globalLayout'
});

Router.route('/', function () {
  this.render('terrainList');
});

Router.route('/admin', function () {
  this.render('admin');
})