
const parse = commands => commands.split('').reduce((pv, cv, ix) => {
  cv === 'o' && ix !== commands.lastIndexOf('o')
    ? pv.push(pv[pv.length - 1])
    : cv === 'i'
      ? pv[pv.length - 1]++
      : cv === 'd'
        ? pv[pv.length - 1]--
        : cv === 's'
          ? pv[pv.length - 1] *= pv[pv.length - 1]
          : null

  return pv
}, [0])



module.exports = {
  parse
}