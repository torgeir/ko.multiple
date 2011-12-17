# ko.multiple
## A knockout.js plugin handling multiple view models, one per view

### An example!

    <!doctype html>
    <html>
    <body>

      <div>
          <a href="#/">home</a>
          <a href="#/list">list</a>
      </div>

      <div data-bind="template: { name: template(), data: viewModel() }"></div>

      <script id="homeTemplate" type="text/html">
        <h1>Welcome!</h1>
        <p>This is the homeTemplate</p>
        <span data-bind="html: text"></span>
      </script>

      <script id="listTemplate" type="text/html">
        <h1>List!</h1>
        <p>This is the listTemplate</p>
        <ul data-bind='template: { name: "itemTemplate", foreach: items }'</ul>
      </script>

      <script id="itemTemplate" type="text/html">
        <li>${item}</li>
      </script>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
      <script src="http://cloud.github.com/downloads/SteveSanderson/knockout/jquery.tmpl.js"></script>
      <script src="http://cloud.github.com/downloads/SteveSanderson/knockout/knockout-1.2.1.js"></script>
      <script src="https://raw.github.com/quirkey/sammy/master/examples/backend/public/javascripts/sammy.js"></script>

      <script src="https://raw.github.com/torgeir/ko.multiple/master/ko.multiple.js"></script>

      <script>
        var app        = {},
            viewModels = {};

        viewModels.home = { text: 'This viewmodel, viewModels.home, has no items, like <a href="#/list">list</a>' };
        viewModels.list = { text: 'This viewmodel, viewModels.list, has items:',
                            items: [ { item: 1 }, { item: 2 }, { item: 3 } ] };

        /* Initialize your single page app view model with one viewModel per view */
        ko.multiple(viewModels, app);

        /* app#show() now handles switching to views and load their corresponding view model */
        app.show('home');

        /* applyBindings() as usual */
        ko.applyBindings(app);

        Sammy('body')
          .get('#/', function () {
            app.show('home');
          })
          .get('#/list', function () {
            app.show('list');
          })
          .run();
      </script>

    </body>
    </html>

### License

Copyright (c) 2011 Torgeir Thoresen <@torgeir>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

