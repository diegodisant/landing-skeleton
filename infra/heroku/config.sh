#!/bin/sh

source ../../.env

heroku config:set APP_HOST=${APP_HOST} --app ${HEROKU_APP}
heroku buildpacks:set heroku-community/static --app ${HEROKU_APP}
heroku git:remote --app ${HEROKU_APP}

exit 0
