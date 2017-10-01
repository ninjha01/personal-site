CXX = clang++
CXXFLAGS = -O2
OFILES = menu_builder.out project_builder.out menu_builder.out

main: $(FILES)
	$(CXX) $(CXXFLAGS) menu_builder.cpp -o menu_builder.out
	$(CXX) $(CXXFLAGS) project_builder.cpp -o project_builder.out
	$(CXX) $(CXXFLAGS) writing_builder.cpp -o writing_builder.out

clean:
	rm -f $(OFILES)
	rm -f *~
