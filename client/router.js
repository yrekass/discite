Router.route('/', function () {
    this.render('homepageTpl');
});

Router.route('/course/list/', function () {
    this.render('courseListTpl');
});

Router.route('/course/create/', function () {
    this.render('courseCreateTpl');
});

Router.route('/course/:_id', function () {
    var course = Courses.findOne({_id: this.params._id});
    this.render('courseTpl', {data: course});
},{name: 'course.view'});