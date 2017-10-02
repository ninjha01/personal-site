filename='details.md'

cp ./public_html/boilerplate/template/generic_template.html ./public_html/boilerplate/generic.html;
cp ./public_html/boilerplate/template/home_template.html ./public_html/boilerplate/home.html;

while read p; do
    
    TAG=$(echo $p | cut -f1 -d-);
    VALUE=$(echo $p | cut -f2 -d-);
    sed -i -e "s/$TAG/$VALUE/g" public_html/boilerplate/generic.html;
    sed -i -e "s/$TAG/$VALUE/g" public_html/boilerplate/home.html;

    ##Don't know why I need to do this
    rm public_html/boilerplate/*.html-e;
done < $filename


