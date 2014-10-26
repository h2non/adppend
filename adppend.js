/* adppend v.0.1 - MIT license - https://github.com/h2non/adppend */
(function (global, document) {
  var toStr = Object.prototype.toString
  var slice = Array.prototype.slice

  function isNotTextNode(node) {
    return node && toStr.call(node) !== '[object Text]' || false
  }

  function filterNodes(arr) {
    return slice.call(arr).filter(isNotTextNode)
  }

  function Appender(query) {
    this._percentage = 60
    this.tree = document.querySelectorAll(query)
  }

  Appender.prototype.percentage = function (num) {
    this._percentage = num
    return this
  }

  Appender.prototype.append = function (data, nodes) {
    var node, tree = nodes || this.tree
    if (tree) {
      node = tree[Math.round(tree.length / 100 * this._percentage)]
      if (node) {
        node.parentNode.insertBefore(createElement(data), node)
      }
    }
    return this
  }

  Appender.prototype.appendChild = function (data) {
    var i, x, child, tree = this.tree
    if (tree) {
      for (i = 0; i < tree.length; i += 1) {
        if (tree[i]) {
          child = filterNodes(tree[i].childNodes)
          for (x = 0; x < child.length; x += 1) {
            if (child[x]) {
              this.append(data, filterNodes(child[x].childNodes))
            }
          }
        }
      }
    }
    return this
  }

  function adppend(query, options) {
    return new Appender(query, options)
  }

  function createElement(data) {
    var node = null
    if (typeof data === 'string') {
      node = document.createElement('div')
      node.innerHTML = data
    } else if (data && /Element/.test(toStr.call(data))) {
      node = data
    }
    return node
  }

  adppend.VERSION = '0.1.0'
  global.adppend = global.adppend || adppend

}(this, document))
