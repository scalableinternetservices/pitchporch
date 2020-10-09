#!/bin/bash

##########################################################################
# deploy-local.sh
#
# Usage:
#   ./script/deploy-local.sh [version]
#
##########################################################################

set -e

echo "Packaging and deploying local repo contents."
echo "================================="

aws ecr get-login-password | docker login --username AWS --password-stdin 101624687637.dkr.ecr.us-west-2.amazonaws.com

echo "Building local docker image"
docker build --tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:local .

echo "Pushing local docker image"
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:local

echo "Updating previous and latest"
docker pull 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:latest
docker tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:latest 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:previous
docker tag 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:local 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:latest

echo "Pushing latest and previous"
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:latest
docker push 101624687637.dkr.ecr.us-west-2.amazonaws.com/pitchporch:previous

echo "Updating app-web"
./script/deploy-ecs.sh pitchporch-app-web "local"

# echo "Updating app-background"
# ./script/deploy-ecs.sh app-background "local"

# echo "Updating lambda"
# aws lambda update-function-code \
#   --no-cli-pager \
#   --region us-west-2 \
#   --function-name pitchporch \
#   --zip-file fileb://./server/bundle.zip

echo "DONE"
