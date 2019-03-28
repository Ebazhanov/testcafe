#!/bin/sh

# Build testcase suite image for YourApp, depending on git branch name and commit SHA value
docker build -t testcafe .

# Create and run new container for YourApp testcase, translate VNC port
docker run --name testcafe -p 5999:5999 testcafe