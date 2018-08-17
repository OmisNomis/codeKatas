package makethedeadfishswim

import (
	"testing"
)

func TestParseSimpleOutput(t *testing.T) {
	i := Parse("iiisdoso")
	ex := []int{8, 64}

	for ix, val := range i {
		if val != ex[ix] {
			t.Errorf("Expected index '%d' to be '%d', got '%d'", ix, val, ex[ix])
		}
	}
}

func TestParseHandlesNotCommandLetters(t *testing.T) {
	i := Parse("iiaaabbbnnmisdoso")
	ex := []int{8, 64}

	for ix, val := range i {
		if val != ex[ix] {
			t.Errorf("Expected index '%d' to be '%d', got '%d'", ix, val, ex[ix])
		}
	}
}

func TestParseOnlyOutputsWhenCommandIsPassed(t *testing.T) {
	i := Parse("iiidddddidididididisssssididi")
	ex := []int{}

	if len(i) != len(ex) {
		t.Error("Incorrect number of values returned")
	}
}

func TestParseRandomTests(t *testing.T) {
	i := Parse("iiiiiiiio")
	ex := []int{8}

	if len(i) != len(ex) {
		t.Error("Incorrect number of values returned")
	}

	for ix, val := range i {
		if val != ex[ix] {
			t.Errorf("Expected index '%d' to be '%d', got '%d'", ix, val, ex[ix])
		}
	}

	i = Parse("iiddsso")
	ex = []int{0}

	if len(i) != len(ex) {
		t.Error("Incorrect number of values returned")
	}

	for ix, val := range i {
		if val != ex[ix] {
			t.Errorf("Expected index '%d' to be '%d', got '%d'", ix, val, ex[ix])
		}
	}

	i = Parse("iisddddiio")
	ex = []int{2}

	if len(i) != len(ex) {
		t.Error("Incorrect number of values returned")
	}

	for ix, val := range i {
		if val != ex[ix] {
			t.Errorf("Expected index '%d' to be '%d', got '%d'", ix, val, ex[ix])
		}
	}

}
