filename='details.md'

quoteSubst() {
    IFS= read -d '' -r < <(sed -e ':a' -e '$!{N;ba' -e '}' -e 's/[&/\]/\\&/g; s/\n/\\&/g' <<<"$1")
    printf %s "${REPLY%$'\n'}"
}

cp ./public_html/boilerplate/template/generic_template.html ./public_html/boilerplate/generic.html;
cp ./public_html/boilerplate/template/home_template.html ./public_html/boilerplate/home.html;

while read p; do
    
    TAG=$(echo $p | cut -f1 -d-);
    VALUE=$(echo $p | cut -f2 -d-);

    sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/g" ./public_html/boilerplate/generic.html > temp.html
    mv temp.html ./public_html/boilerplate/generic.html
    
    sed -e ':a' -e '$!{N;ba' -e '}' -e "s/$TAG/$(quoteSubst "$VALUE")/g" public_html/boilerplate/home.html > temp.html;
    mv temp.html ./public_html/boilerplate/home.html;
        
done < $filename


cd public_html/builders/;
make;
