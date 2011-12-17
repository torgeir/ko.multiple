(function (ko) {

  if (!ko) { throw 'ko not found'; };

  ko.multiple = function (viewModels, app) {
    app.template = ko.observable('');
    app.show = function (template) {
      this.template(template + 'Template');
    };
    app.viewModel = ko.dependentObservable(function () {
      return viewModels[this.template().replace(/Template/, '')];
    }, app);
    return app;
  };

})(ko);
