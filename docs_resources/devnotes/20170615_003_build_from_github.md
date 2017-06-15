# Build From Github

Rather than upload from zip all the time. We can build in `build.phonegap.com` directly from github.

If you are creating open source projects then build.phonegap.com allows 25 projects for free.

## Github

If you don't have a github.com account then:

- create one
- create a repository for your project
- clone the project
- copy your current app files into the github project folder

## What to version control?

I don't want to store all the files in version control because some of them are automatically generated.

I added:

- docs_resources
- res
- www
- config.xml

And I used github to create a `LICENCE` and a `README.md`

I ignored:

- hooks
- platforms
- plugins
- unversioned

Commit and Push all this to Github

## Create a new project on build.phonegap.com

I created a new project, because I wasn't sure this was going to work.

I added the url of the project into the github repo source url field.

Waited till it was ready and then `rebuild all`

And it worked!

It was automatically public so I could download the new `.apk`

## Why?

- this is easier than created a zip which is prone to error
- I can have a 'development' project which I use for testingand
- and a 'release' project which I give to other people
- now everyone can see your code and give you the kudos you deserve for being a great open source mobile app developer