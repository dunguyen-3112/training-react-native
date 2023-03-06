#!/bin/bash
ip=$(ifconfig | grep "inet " | awk '{print $2}' | sed -n "2p");
npx json-server --host $ip ./data/db.json & IP=$ip yarn android
