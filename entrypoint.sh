#!/bin/bash
export REACT_APP_API_HOST=$API_HOST
npm install -g serve
npm run build && serve -s build