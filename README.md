# barebones Ghost theme

The most basic Ghost theme possible.  This Ghost theme contains the least amount of code necessary to
satisfy the following goals.

**Goals**:
* Pass gscan
* Show posts and post content
* Generate a zip file for installation

There is essentially no CSS - the only CSS rules definted are those necessary
to pass gscan - and those rules don't do anything.

## Prerequisites
* NodeJS (v10.17.x)
* git (optional)

## Setup
Either clone this repo or download the tarball/zip file, then install the package
dependencies.

```shell script
npm install
```

## Build
After setup is completed (once), the build commands are essentially the same as
the default Casper theme.

```shell script
npm run zip
```

There is also a development mode that supports livereload.
```shell script
npm run dev
```

## Installation
After `zip` completes successfully, install the resulting bundle from the
`dist` directory using the Ghost admin interface.

***

This repository is maintained by [Ghoststead](https://www.ghoststead.com).
