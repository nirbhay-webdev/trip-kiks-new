#!/bin/sh

npm install

#Build App
bower install
npm  install
gulp build


echo `Build Successful`
