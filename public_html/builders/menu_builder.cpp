#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

using namespace std;

int main(int argc, char* argv[]) {
  
  if( argc < 2 ) {
    cout << argv[0] << "Incorrect usage" << endl;
  } else {
    
    string in_writing(argv[1]);
    ifstream writing_file(in_writing);
    
    if(!writing_file.is_open()) {
      cout << "Failed to open: " << argv[1] << endl;
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

      while (!writing_file.eof()) {
	
	//Parse Data and create entry
	ostringstream entry;
	string title, filename, desc, line; 
	getline(writing_file, title);
	getline(writing_file, filename);
	getline(writing_file, desc);

	//Burn delimiter
	getline(writing_file, line);

    
	//Generate list item
	entry << "<li><a href=\"" << filename << ".html\">" << title << "</a></li>" << endl;
	//Add to stream
	menu << entry.str();
      }
      menu << "</ul>" << endl;
    
      //Build Projects
      string in_projects(argv[2]);
      ifstream projects_file(in_projects);
    
      if(!projects_file.is_open()) {
	cout << "Failed to open: " << argv[1] << endl;
      } else {

	menu << "<span class=\"opener\">Projects</span>" << endl;
	menu << "<ul>" << endl;
	
	while (!projects_file.eof()) {
	
	  //Parse Data and create entry
	  ostringstream entry;

	  string title, url, icon, desc; 
	  getline(projects_file, title);
	  getline(projects_file, url);
	  getline(projects_file, icon);
	  getline(projects_file, desc);

	  //Burn delimiter
	  getline(projects_file, desc);

    
	  //Generate list item
	  entry << "<li><a href=\"" << url << "\">" << title << "</a></li>" << endl;
	  //Add to stream
	  menu << entry.str();
	}
       
	menu << "</ul>" << endl;
      
      
	menu << "</li>" << endl;
	menu << "</ul>" << endl;
	menu << "</nav>" << endl;
      

	cout << menu.str() << endl;
      }
    }
  }
  return 0;
}

