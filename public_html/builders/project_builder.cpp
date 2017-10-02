#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

using namespace std;

int main(int argc, char* argv[]) {
  
  if( argc != 2 ) {
    cout << argv[0] << "Incorrect usage" << endl;
  } else {

    string in_name(argv[1]);
    ifstream in_file(in_name);

    if(!in_file.is_open()) {
      cout << "Failed to open: " << argv[1] << endl;
    } else {

      string line;
      ostringstream projects;
      
      
      projects << "<!-- Section -->" << endl; 
      projects << "<section>" << endl; 
      projects << "<header class=\"major\">" << endl; 
      projects << "<h2>Projects</h2>" << endl; 
      projects << "</header>" << endl; 
      projects << "<div class=\"features\">" << endl; 
     

      while (!in_file.eof()) {
	
	//Parse Data and create entry
	ostringstream entry;
	string title, url, icon, desc; 
	getline(in_file, title);
	getline(in_file, url);
	getline(in_file, icon);
	getline(in_file, desc);

	//Burn Delimeter
	getline(in_file, line);
	
	//Add entry to projects
	entry << "<article>\n<span class=\"icon fa-" << icon << "\"></span>" << endl;
	entry << "<div class=\"content\">\n<h3><a href=\"" << url << "\">" << title << "</a></h3>" << endl;
	entry << "<p>" << desc << "</p>" << endl;
	entry << "</div>\n</article>" << endl;
	projects << entry.str();
      }
      
      projects << "</div>" << endl;

      cout << projects.str() << endl;
    }
  }
  return 0;
}
