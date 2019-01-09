SHELL := /bin/bash
name := movie-favs-frntnd
dockerTag := $(shell git rev-parse head)

.EXPORT_ALL_VARIABLES:
	FOO=bar

docker:
	@docker build -t andimenge/$(name):$(dockerTag) .

push:
	@docker push andimenge/$(name):$(dockerTag)

deploy:
	@DOCKER_HOST="tcp://threethink.io:2376"
	@DOCKER_TLS_VERIFY=1
	@DOCKER_CERT_PATH=~/.docker/threethink.io/
	docker-compose up -d
	
