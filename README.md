## README

Open Contract Intake (OCI) is a simple web-based form for capturing metadata about contracts.  OCI is a web server that generates the form template, and accepts user input through the form.  Data submitted by users to OCI is stored in a local database.

OCI is built with Ruby on Rails.  Since Rails is highly-configurable, it's relatively simple to change the database backend, file storage, add file-level encryption, etc.

## INSTALLATION

NOTE ON RUBY AND RAILS VERSIONS:  OCI assumes that you're using Ruby 2.0.0-p0 and Rails 4.0.0.beta1.  You'll need the correct version of Ruby installed locally before you can get started.

Once you've got Ruby (and the `bundler` gem installed), follow these steps from the OCI project directory, via your command line:

1.  `bundle install`
2.  `rake db:create`
3.  `rails server`

Visit `localhost:3000` in your browser.  You should see the intake form.

## CUSTOMIZATION

### Database

OCI is configured to use a SQLite database on the same machine as the server is running on.  This is easily changed, per the usual Rails database configuration options.

### File Storage

OCI is configured to store files on the local file system of the same machine as the server is running on.  This is easily changed, per the `paperclip` gem configuration options.

## LICENSE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.