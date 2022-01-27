#!/bin/sh

source ../../.env

git push heroku +HEAD:main
heroku apps:open --app ${HEROKU_APP}

exit 0
