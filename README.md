[![Netlify Status](https://api.netlify.com/api/v1/badges/0aa03345-4e1c-4411-991f-a634ff80d2c4/deploy-status)](https://app.netlify.com/sites/netsby/deploys)

## todo list
- [x] Homepage editable on backend
- [x] Navbar on homepage is fixed on mobile too
- [x] Footer
- [x] BACK button

## Figure out
- [ ] Next/Prev link?
- [ ] Pagination

### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Purgecss
This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [tachyons](https://tachyons.io/). 