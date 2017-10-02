filename='details.md'
while read p; do
    
    TAG=$(echo $p | cut -f1 -d-);
    VALUE=$(echo $p | cut -f2 -d-);
    sed -e "s/$TAG/$VALUE/g" ./public_html/boilerplate/template/generic_template.html;
    sed -e "s/$TAG/$VALUE/g" ./public_html/boilerplate/template/home_template.html > ./public_html/boilerplate/home.html; 
done < $filename
