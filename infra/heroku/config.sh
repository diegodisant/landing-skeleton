#!/bin/sh

source ../../.env

heroku buildpacks:set heroku-community/static --app ${HEROKU_APP}
heroku git:remote --app ${HEROKU_APP}

exit 0
