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

/* 
simpleTarget = {
  name: String,
  close: Bool,
  open: Bool
  etc...
}
*/ 

let isNoneParentValue = function (simpleTarget, simpleParentTarget, parentNotOmitNames = {}) {
  // 親要素にそれ以上内容がなければ省略できる の部分
  const parentName = simpleParentTarget.name
  const targetName = simpleTarget.name
  if (parentNotOmitNames.hasOwnProperty(parentName)) {
    // 親要素が ... 以外での部分
    return false
  }
  if (targetName === parentName && !simpleParentTarget.close && simpleParentTarget.open && simpleTarget.close) {
    return true
  }
  return false
}

let endOmitCanTag = {
  // 直後に要素が続く場合、省略になるものをオブジェクト型で持つ
  // ex:</li> は直後に li 要素が続くか、親要素にそれ以上内容がなければ省略できる
  li: function (simpleTarget, simpleParentTarget) {
    const targetName = simpleTarget.name
    let omitTag = {
      li: true
    }
    if (omitTag.hasOwnProperty(targetName) && isNoneParentValue(simpleTarget, simpleParentTarget)) {
      return true
    }
    return false
  }
}
export default {endOmitMustTag: endOmitMustTag, endOmitCanTag: endOmitCanTag}
