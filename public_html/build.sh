#!/bin/bash

for file in $(ls *.md);
do pandoc --ascii -f markdown -t html "${file}" -o "${file%md}html";
done;

cp * ../myweb/html/;
