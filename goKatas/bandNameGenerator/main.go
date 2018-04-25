package main

import (
	"strings"
)

func bandNameGenerator(word string) string {
	if string(word[0]) == string(word[len(word)-1]) {
		return strings.ToUpper(word[:1]) + word[1:] + word[1:]
	}
	return "The " + strings.Title(word)
}

func main() {
	if bandNameGenerator(string("Knife")) != "The Knife" {
		panic("knife did not provide the right output")
	}
	if bandNameGenerator(string("tart")) != "Tartart" {
		panic("tart did not provide the right output")
	}
	if bandNameGenerator(string("sandles")) != "Sandlesandles" {
		panic("sandles did not provide the right output")
	}
	if bandNameGenerator(string("bed")) != "The Bed" {
		panic("bed did not provide the right output")
	}
	if bandNameGenerator(string("step-daughter")) != "The Step-Daughter" {
		panic("step-daughter did not provide the right output")
	}

}
