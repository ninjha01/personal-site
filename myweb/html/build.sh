#!/bin/bash

for file in $(ls *.md);
do pandoc -f markdown -t html "${file}" -o "${file%md}html";
done;

cp * ../myweb/html/;
