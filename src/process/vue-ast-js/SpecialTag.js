let endAbridMustTag = {
  br: true,
  img: true,
  hr: true,
  meta: true,
  input: true,
  embed: true,
  area: true,
  base: true,
  col: true,
  keygen: true,
  link: true,
  param: true,
  source: true
}

let endAbridCanTag = {
  li: true,
  dt: true,
  dd: true,
  p: true,
  tr: true,
  td: true,
  th: true,
  rt: true,
  rp: true,
  optgroup: true,
  option: true,
  thread: true,
  tfoot: true
}
export default {endAbridMustTag: endAbridMustTag, endAbridCanTag: endAbridCanTag}
