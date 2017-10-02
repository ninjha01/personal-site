#!/bin/bash

quoteSubst() {
    IFS= read -d '' -r < <(sed -e ':a' -e '$!{N;ba' -e '}' -e 's/[&/\]/\\&/g; s/\n/\\&/g' <<<"$1")
    printf %s "${REPLY%$'\n'}"
}

#Build External Pages
cd ./public_html/content/essays/;
for file in $(ls *.md);
do
    TAG="{CONTENT}";
    VALUE=$(pandoc --ascii -f markdown -t html "${file}");
    sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/" ../../boilerplate/generic.html > temp.html;
    mv temp.html "../../../myweb/html/${file%md}html"; 
    
    ##Build the Menu
    cd ../../../myweb/html/;
    TAG="{MENU}";
    VALUE=$(../../public_html/builders/menu_builder.out ../../public_html/content/essays/writing.md ../../public_html/content/projects.md);
    cd ../../public_html/content/essays/;
    sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/" "../../../myweb/html/${file%md}html" > temp.html;
    mv temp.html "../../../myweb/html/${file%md}html";

    
done;
cd ../../../;
#Build Home Page

##Build Projects
TAG="{PROJECTS}";
VALUE=$(./public_html/builders/project_builder.out ./public_html/content/projects.md);
sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/" ./public_html/boilerplate/home.html > ./myweb/html/index.html;

##Build Writing
TAG="{WRITING}";
VALUE=$(./public_html/builders/writing_builder.out ./public_html/content/essays/writing.md);
sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/" ./myweb/html/index.html > temp.html;
mv temp.html ./myweb/html/index.html;

##Build the Menu
TAG="{MENU}";
VALUE=$(./public_html/builders/menu_builder.out ./public_html/content/essays/writing.md ./public_html/content/projects.md);
sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/" ./myweb/html/index.html > temp.html;
mv temp.html ./myweb/html/index.html;
