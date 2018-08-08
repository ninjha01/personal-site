import os
import pypandoc
import yaml

def main():
    ## Load and parse config file
    with open('config.yml', 'r') as config_file:
        config_file = yaml.load(config_file)

    #Populate Templates with Personal Data
    files_to_load = ("template/home.html", "template/generic.html", "template/menu.html")
    home_template, generic_template, menu_template = load_files(files_to_load)
    personal_details = config_file["Personal"]
    for tag, value in personal_details.items():
        generic_template = generic_template.replace(tag, value)
        home_template = home_template.replace(tag, value)

    essay_details = config_file["Essays"]
    project_details = config_file["Projects"]
    
    menu_html = build_menu(essay_details, project_details, menu_template)
    tag = "$MENU$"
    generic_template = generic_template.replace(tag, menu_html)
    home_template = home_template.replace(tag, menu_html)
    
    build_essays(essay_details, menu_html, generic_template)
    build_home(essay_details, project_details, menu_html, home_template)
    print("Website Built!")

def build_menu(e_details, p_details, menu_template):
    essay_template = '<li><a href="$FILENAME$".html>$TITLE$</a></li>'
    project_template = '<li><a href="$URL$">$TITLE$</a></li>'    
    # Process Essays
    e_entries = []
    for essay in e_details:
        entry = essay_template
        for tag, value in essay.items():
            entry = entry.replace(tag, value)
        e_entries.append(entry)
    e_entries = '\n'.join(e_entries)
    menu = menu_template.replace("$WRITING$", e_entries)
    # Process Projects
    p_entries = []
    for essay in p_details:
        entry = project_template
        for tag, value in essay.items():
            entry = entry.replace(tag, value)
        p_entries.append(entry)
    p_entries = '\n'.join(p_entries)
    menu = menu.replace("$PROJECTS$", p_entries)
    return menu

def build_essays(e_details, menu_html, template):
    #Insert Content
    essay_dir = "essays/"
    for essay in e_details:
        basename = essay['$FILENAME$']
        filename = essay_dir + basename + '.md'
        print(filename)
        with open(filename, "r") as f:
            content = pypandoc.convert_text(f.read(), 'html', format='md')
            tag = "$CONTENT$"
            payload = template.replace(tag, content)
            with open(basename + '.html', "w") as page:
                page.write(payload)

def build_home(e_details, p_details, menu_html, home_template):

    essay_template = ( '<article>\n<span class="icon fa-pencil"></span>'
                       '<div class="content">'
                       '<h3><a href=$FILENAME$>$TITLE$</a></h3>'
                       '<p>$BLURB$</p></div>\n</article>' )
    
    project_template = ( '<article>\n<span class="icon fa-$ICON$"></span>'
                         '<div class="content">'
                         '<h3><a href=$URL$>$TITLE$</a></h3>'
                         '<p>$BLURB$</p></div>\n</article>' )
    
    # Process Essays
    e_entries = []
    for essay in e_details:
        entry = essay_template
        for tag, value in essay.items():
            entry = entry.replace(tag, value)
        e_entries.append(entry)
    e_entries = '\n'.join(e_entries)
    payload = home_template.replace("$WRITINGS$", e_entries)
    
    # Process Projects
    p_entries = []
    for essay in p_details:
        entry = project_template
        for tag, value in essay.items():
            entry = entry.replace(tag, value)
        p_entries.append(entry)
    p_entries = '\n'.join(p_entries)
    payload = payload.replace("$PROJECTS$", p_entries)
    with open('index.html', "w") as page:
        page.write(payload)
                    
def load_files(filenames):
    loaded_files = []
    for filename in filenames:
        with open(filename, "r") as file:
            loaded_files.append(file.read())
    return loaded_files

if __name__=="__main__":
    main()
