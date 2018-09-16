#!/bin/bash

if [ $1 = 1 ]
then
	php bin/console server:run
elif [ $1 = 2 ]
then
	yarn encore dev --watch
elif [ $1 = 3 ]
then
	yarn encore production
else
	echo "Possible parameters:"
	echo "1 - Run PHP server"
	echo "2 - Run webpack dev and watch assets"
	echo "3 - Run webpack to create production build"
fi
