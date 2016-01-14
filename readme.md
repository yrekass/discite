#discite

##stack

- [Meteor](http://meteor.com)

##package

- [check](https://atmospherejs.com/meteor/check)
- [iron:router](https://github.com/iron-meteor/iron-router)
- [zimme:active-route](https://github.com/zimme/meteor-active-route)
- [aldeed:collection2](https://github.com/aldeed/meteor-collection2)
- [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers)
- [aldeed:autoform](http://autoform.meteor.com/)

##folder structure 

```
client/                 # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    modules/            # Meant for components, such as form and more(*)
    views/              # Contains all views(*)
        common/         # General purpose html templates
model/                  # Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
routes/                 # All routes(*)
server/                 # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
```
