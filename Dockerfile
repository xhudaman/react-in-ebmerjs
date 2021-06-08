# syntax=docker/dockerfile:experimental

FROM node:14 AS base

ENV DOCKER_BUILDKIT=1
ENV COMPOSE_DOCKER_CLI_BUILD=1
ENV YARN_CACHE_FOLDER /cache/yarn
ENV NODE_ENV development

WORKDIR /src

COPY ./package.json ./yarn.lock ./

RUN yarn global add ember-cli

RUN \
  --mount=type=cache,id=yarn_cache,target=/cache/yarn \
  yarn install --frozen-lockfile --non-interactive
