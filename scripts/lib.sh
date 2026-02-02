#!/bin/bash

set_for_backend() {
  local env_name=$1
  local env_value=$2
  set_env $env_name $env_value $BACKEND_ENV_PATH
}

set_for_frontend() {
  local env_name=$1
  local env_value=$2
  set_env $env_name $env_value $FRONTEND_ENV_PATH
}

set_for_mobile() {
  local env_name=$1
  local env_value=$2
  set_env $env_name $env_value $MOBILE_ENV_PATH
}

set_env() {
  local env_name=$1
  local env_value=$2
  local env_path=$3

  echo "$env_name=$env_value" >> $env_path
}

clear_env() {
  local env_path=$1
  echo -n "" > $env_path
}