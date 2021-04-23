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

let omitTagPropertys = {
  /// 直後に ~ 要素が続くかの部分
  li: {li: 1},
  dt: {dt: 1, dd: 1},
  dd: {dt: 1, dd: 1},
  p: {address: 1,
    article: 1,
    aside: 1,
    blockquote: 1,
    details: 1,
    div: 1,
    dl: 1,
    fieldset: 1,
    figcaption: 1,
    figure: 1,
    footer: 1,
    form: 1,
    h1: 1,
    h2: 1,
    h3: 1,
    h4: 1,
    h5: 1,
    h6: 1,
    header: 1,
    hgroup: 1,
    hr: 1,
    main: 1,
    menu: 1,
    nav: 1,
    ol: 1,
    p: 1,
    pre: 1,
    section: 1,
    table: 1,
    ul: 1},
  tr: {tr: 1},
  td: {td: 1, th: 1},
  th: {td: 1, th: 1},
  rt: {rt: 1, rp: 1},
  rp: {rt: 1, rp: 1},
  optgroup: {optgroup: 1},
  option: {option: 1, optgroup: 1},
  thread: {tbody: 1, tfoot: 1},
  tfoot: {}
}

const genericOmitTagFunc = function (tagName, simpleTarget, simpleParentTarget, parentRule, parentNotOmitNames) {
  const targetName = simpleTarget.name
  if (omitTagPropertys[tagName].hasOwnProperty(targetName)) {
    return true
  }
  if (parentRule && isNoneParentValue(simpleTarget, simpleParentTarget, parentNotOmitNames)) {
    // parentRuleがある時に、
    // 親要素にそれ以上内容がなければ省略できるの条件を付加される
    return true
  }
  return false
}

let endOmitCanTag = {
  // 直後に要素が続く場合、省略になるものをオブジェクト型で持つ
  // ex:</li> は直後に li 要素が続くか、親要素にそれ以上内容がなければ省略できる
  // 省略させる条件が複雑になる可能性もあると思うので、このfuncの利用者目線からはtagnameから実行させる
  li: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('li', simpleTarget, simpleParentTarget, true, {})
  },
  dt: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('dt', simpleTarget, simpleParentTarget, false, {})
  },
  dd: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('dd', simpleTarget, simpleParentTarget, true, {})
  },
  p: function (simpleTarget, simpleParentTarget) {
    let parentNotOmitNames = {
      a: 1,
      audio: 1,
      del: 1,
      ins: 1,
      map: 1,
      noscript: 1,
      video: 1
    }
    return genericOmitTagFunc('p', simpleTarget, simpleParentTarget, true, parentNotOmitNames)
  },
  tr: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('tr', simpleTarget, simpleParentTarget, true, {})
  },
  td: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('td', simpleTarget, simpleParentTarget, true, {})
  },
  th: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('th', simpleTarget, simpleParentTarget, true, {})
  },
  rt: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('rt', simpleTarget, simpleParentTarget, true, {})
  },
  rp: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('rp', simpleTarget, simpleParentTarget, true, {})
  },
  optgroup: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('optgroup', simpleTarget, simpleParentTarget, true, {})
  },
  option: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('option', simpleTarget, simpleParentTarget, true, {})
  },
  thread: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('thread', simpleTarget, simpleParentTarget, false, {})
  },
  tfoot: function (simpleTarget, simpleParentTarget) {
    return genericOmitTagFunc('tfoot', simpleTarget, simpleParentTarget, false, {})
  }
}
export default {endOmitMustTag: endOmitMustTag, endOmitCanTag: endOmitCanTag}
