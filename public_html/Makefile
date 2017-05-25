# Makefile for my personal website

## Defines the converter
CONVERT		= pandoc

## Defines the flags passed to the converter
CONVFLAGS	= -s -o

# The source MD files
MDFILES		= home.md

HTMLFILES 	= home.html

main:	$(MDFILES)
	$(CONVERT) $(CONVFLAGS) $(HTMLFILES) $(MDFILES)

clean:
	rm -f $(HTMLFILES)
