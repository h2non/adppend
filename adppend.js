/* addpend v.0.1 - MIT license - https://github.com/h2non/adppend */
(function (global, document) {

  function Appender(query) {
    this.percentage = 60
    this.tree = document.querySelectorAll(query)
  }

  Appender.prototype.append = function (data) {
    var index, node, tree = this.tree
    if (tree) {
      index = Math.round(tree.length / 100 * this.percentage)
      node = tree[index]
      if (node) {
        node.parentNode.insertBefore(createElement(data), node)
      }
    }
  }

  function adppend(query, options) {
    return new Appender(query, options)
  }

  function createElement(data) {
    var node = null
    if (typeof data === 'string') {
      node = document.createElement('div')
      node.innerHTML = data
    } else if (data && /Element/.test(Object.prototype.toString.call(data))) {
      node = data
    }
    return node
  }

  adppend.VERSION = '0.1.0'
  global.adppend = global.adppend || adppend

}(this, document))
