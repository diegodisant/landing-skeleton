#!/bin/sh

source ../../.env

heroku logs --tail --app ${HEROKU_APP}

exit 0
