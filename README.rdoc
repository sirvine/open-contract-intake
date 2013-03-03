== README

Open Contract Intake (OCI) is a simple web-based form for capturing metadata about contracts.  OCI is a web server that generates the form template, and accepts user input through the form.  Data submitted by users to OCI is stored in a local database.

OCI is built with Ruby on Rails.  Since Rails is highly-configurable, it's relatively simple to change the database backend, file storage, add file-level encryption, etc.

== INSTALLATION

NOTE ON RUBY AND RAILS VERSIONS:  OCI assumes that you're using Ruby 2.0.0-p0 and Rails 4.0.0.beta1.  You'll need the correct version of Ruby installed locally before you can get started.

Once you've got Ruby and the @bundler@ gem installed, follow these steps from the OCI project directory, via your command line:

1.  @bundle install@
2.  @rake db:create@
3.  @rails server@

Visit @localhost:3000@ in your browser.  You should see the intake form.

== CUSTOMIZATION

[TBD]