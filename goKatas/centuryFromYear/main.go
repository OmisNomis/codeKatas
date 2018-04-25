package main

import "strconv"

func century(year int) int {
	stringYear := strconv.Itoa(year)

	first, _ := strconv.Atoi(stringYear[:len(stringYear)-2])
	second, _ := strconv.Atoi(stringYear[len(stringYear)-2:])

	if second > 0 {
		first++
	}

	return first
}

func main() {
	if century(int(1990)) != 20 {
		panic("1990 did not provide the right output")
	}
	if century(int(1705)) != 18 {
		panic("1705 did not provide the right output")
	}
	if century(int(1900)) != 19 {
		panic("1900 did not provide the right output")
	}
	if century(int(1601)) != 17 {
		panic("1601 did not provide the right output")
	}
	if century(int(2000)) != 20 {
		panic("2000 did not provide the right output")
	}
	if century(int(89)) != 1 {
		panic("89 did not provide the right output")
	}

}
