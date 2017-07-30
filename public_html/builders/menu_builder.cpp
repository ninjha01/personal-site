#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

using namespace std;

int main(int argc, char* argv[]) {
  
  if( argc < 2 ) {
    cout << argv[0] << "Incorrect usage" << endl;
  } else {

    ostringstream menu;

    //Build Sidebar
    menu << "</section>" << endl;
    menu << "</div>" << endl;
    menu << "</div>" << endl;
    menu << "<!-- Sidebar -->" << endl;
    menu << "<div id=\"sidebar\">" << endl;
    menu << "<div class=\"inner\">" << endl;

    //Build Menu
    menu << "<!-- Menu -->" << endl;
    menu << "<nav id=\"menu\">" << endl;
    menu << "<header class=\"major\">" << endl;
    menu << "<h2>Menu</h2>" << endl;
    menu << "</header>" << endl;
    menu << "<ul>" << endl;
    menu << "<li><a href=\"index.html\">Homepage</a></li>" << endl;
    menu << "<li>" << endl;
    menu << "<span class=\"opener\">Writing</span>" << endl;
    menu << "<ul>" << endl;
    
    for(int i = 1; i < argc; i++) {
      ostringstream entry;
      //Get Name
      string file_name(argv[i]);
      char title[50];
      size_t length = file_name.copy(title, file_name.size() - 5, 0);
      title[length]='\0';
    
      //Generate list item
      entry << "<li><a href=\"" << file_name << "\">" << title << "</a></li>" << endl;
      //Add to stream
      menu << entry.str();
    }

    //Wrap and print
    menu << "</ul>" << endl;
    menu << "</li>" << endl;
    menu << "</ul>" << endl;
    menu << "</nav>" << endl;

    cout << menu.str() << endl;
  }
  return 0;
}
