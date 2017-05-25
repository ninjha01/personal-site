# Makefile for my personal website

## Defines the converter
CONVERT		= pandoc

## Defines the converter flags
FLAGS		= --smart --standalone

## The source MD files
MDFILES		= $(wildcard *.md)

## The produced HTML files
HTMLFILES 	= $(MDFILES: .md = .html)

## Pattern-matching rules

%.html : %.md
	$(CONVERT) $(FLAGS) -o $@ $<

## Targets and Dependencies

.PHONY 	:	all clean

all 	: 	$(HTMLFILES)

clean	:
	rm -f $(HTMLFILES)
