SHELL := /bin/bash
name := movie-favs-frntnd
dockerTag := $(shell git rev-parse head)

docker:
	@docker build -t andimenge/$(name):$(dockerTag) .

push:
	@docker push andimenge/$(name):$(dockerTag)
