#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PARENT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && cd .. && pwd )

LIB_PATH="${SCRIPT_DIR}/lib.sh"
ENV_PATH="${SCRIPT_DIR}/config-env"

source $LIB_PATH

BACKEND_ENV_PATH="${PARENT_DIR}/backend/.env"
FRONTEND_ENV_PATH="${PARENT_DIR}/frontend/.env"
MOBILE_ENV_PATH="${PARENT_DIR}/mobile/.env"

clear_env $BACKEND_ENV_PATH
clear_env $FRONTEND_ENV_PATH
clear_env $MOBILE_ENV_PATH

source $ENV_PATH

set_for_backend "BACKEND_HOST" "0.0.0.0"
set_for_backend "BACKEND_PORT" $BACKEND_PORT

MACHINE_IP=$(hostname -i | cut -d ' ' -f 2)
API_FQDN="http://${MACHINE_IP}:${BACKEND_PORT}/"

set_for_frontend "VITE_API_BASE_URL" $API_FQDN

set_for_mobile "API_BASE_URL" $API_FQDN