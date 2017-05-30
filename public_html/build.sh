#!/bin/bash

for file in $(ls *.md);
do pandoc --ascii -f markdown -t html "${file}" -o "${file%md}html"; mv "${file%md}html" ../myweb/html/;
done;

for file in $(ls essays/*.md);
do pandoc --ascii -f markdown -t html "${file}" -o "${file%md}html"; mv "${file%md}html" ../myweb/html/;
done;

#mv *.html ../myweb/html/;
