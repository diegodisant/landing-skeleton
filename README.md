# landing-skeleton
Light HTML5 Landing Page Skeleton with Materialize Framework

> ¡We don't want a bunch of technologies to generate a simple static site!

**This is progressive you can add Vue or some add-on into this project**

## Build
```bash
yarn app:build

open index.min.html
```

## Yarn Scripts

name|description
-|-
mcss:build|builds CSS for materialize framework from SASS files
mcss:minify|minify the generated CSS for materialize framework
mcsss:all|builds and minify CSS for materialize framework
appcss:build|builds CSS for your landing page from SASS files
appcss:minify|minify the generaed CSS for your landing page
appcss:all|builds and minify the generated CSS for your landing page
appjs:minify|minify the landing page application scripts
apphtml:minify|minify the index.html file
app:build|build and minify all landing page assets like JS, SASS, HTML

## Deployment Heroku

`cp .env.dist .env`

**Important: Set your app name in `.env` file, and modify the variable `HEROKU_APP=my-app-name`**

Autoconfig heroku with exec the following commands:

```bash
cd infra/heroku

./config
```

> Note: Deploys MUST do after pushing your changes into your main branch

**And then do a manual deploy for your application:** `./deploy.sh`


**Written by:** [@diegodisant](https://github.com/diegodisant)
