SHELL := /bin/bash
name := movie-favs-frntnd
dockerTag := $(shell git rev-parse head)

.EXPORT_ALL_VARIABLES:
	FOO=bar

docker:
	@docker build -t andimenge/$(name):$(dockerTag) .

push:
	@docker push andimenge/$(name):$(dockerTag)

# deploy:
# 	docker-compose up -d
	
