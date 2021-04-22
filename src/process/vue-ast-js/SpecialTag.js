let endOmitMustTag = {
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
  // 直後に要素が続く場合、省略になるものをオブジェクト型で持つ
  // ex:</li> は直後に li 要素が続くか、親要素にそれ以上内容がなければ省略できる
  li: function (name, parentValue) {
  }
}
export default {endOmitMustTag: endOmitMustTag, endAbridCanTag: endAbridCanTag}
