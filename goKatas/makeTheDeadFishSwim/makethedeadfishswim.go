package makethedeadfishswim

import (
	"strings"
)

// Parse Comment
func Parse(commands string) (res []int) {
	cv := 0

	for _, val := range strings.Split(commands, "") {
		if val == "i" {
			cv++
		}
		if val == "d" {
			cv--
		}
		if val == "s" {
			cv = cv * cv
		}
		if val == "o" {
			res = append(res, cv)
		}
	}

	return
}
