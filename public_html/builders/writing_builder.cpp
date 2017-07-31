#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

using namespace std;

int main(int argc, char* argv[]) {
  
  if( argc < 2 ) {
    cout << argv[0] << "Incorrect usage" << endl;
  } else {

    string in_name(argv[1]);
    ifstream in_file(in_name);

    if(!in_file.is_open()) {
      cout << "Failed to open: " << argv[1] << endl;
    } else {

      string line;
      ostringstream writings;
      
      
      writings << "<!-- Section -->" << endl; 
      writings << "<section>" << endl; 
      writings << "<header class=\"major\">" << endl; 
      writings << "<h2>Writing</h2>" << endl; 
      writings << "</header>" << endl; 
      writings << "<div class=\"features\">" << endl; 

      //Build Writing

      while (!in_file.eof()) {
	
	//Parse Data and create entry
	ostringstream entry;
	string title, filename, desc, line; 
	getline(in_file, title);
	getline(in_file, filename);
	getline(in_file, desc);

	//Burn delimiter
	getline(in_file, line);

	//Add entry to writings
	entry << "<article>\n<span class=\"icon fa-pencil\"></span>" << endl;
	entry << "<div class=\"content\">\n<h3><a href=\"" << filename << "\">" << title << "</a></h3>" << endl;
	entry << "<p>" << desc << "</p>" << endl;
	entry << "</div>\n</article>" << endl;
	writings << entry.str();
      }
      
      writings << "</div>" << endl;      
      cout << writings.str() << endl;
    }
  }
  return 0;
}
