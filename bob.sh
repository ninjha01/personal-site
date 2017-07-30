#!/bin/bash
#TODO: Automate adding essays to writing submenu
#$ESSAYS=strange_loops.html control_problem.html;

#Build External Pages
for file in $(ls ./public_html/content/essays/*.md);
do
    #Build the top
    cat ./public_html/boilerplate/top_generic.html > "${file%md}html";
    #Build the content
    pandoc --ascii -f markdown -t html "${file}" >> "${file%md}html";
    ##Build the Menu
    cd ./myweb/html/;
    ../../public_html/builders/menu_builder.out strange_loops.html control_problem.html >> "../../${file%md}html";
    cd ../../;
    #Build the bottom
    cat ./public_html/boilerplate/bottom_generic.html >> "${file%md}html";
    mv "${file%md}html" ./myweb/html/;
done;

#Build Home Page

##Build the Top
rm ./myweb/html/index.html;
touch ./myweb/html/index.html;
cat ./public_html/boilerplate/top_home.html > ./myweb/html/index.html
##Build Projects
./public_html/builders/project_builder.out ./public_html/content/projects.md >> ./myweb/html/index.html
##Build the Menu
cd ./myweb/html/;
../../public_html/builders/menu_builder.out strange_loops.html control_problem.html >> ../../myweb/html/index.html;
cd ../../;
##Build the Bottom
cat ./public_html/boilerplate/bottom_home.html >> ./myweb/html/index.html;
