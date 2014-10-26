describe('adppend', function () {

  function createNodes(content) {
    var div = document.createElement('div')
    div.id = 'test'
    div.innerHTML = content
    document.body.appendChild(div)
  }

  describe('append()', function () {
    after(function () {
      document.body.removeChild(document.querySelector('#test'))
    })

    it('should create a test nodes in DOM', function () {
      createNodes([
        '<ul>',
        '<li>Hello</li>',
        '<li>World</li>',
        '</ul>'
      ].join(''))
      expect(document.querySelector('#test')).to.be.an('object')
    })

    it('should intersect custom HTML content between nodes', function () {
      adppend('#test > ul > li').append('<a>Link</a>')
      var node = document.querySelector('#test > ul').childNodes[1]
      expect(node.nodeName).to.be.equal('DIV')
      expect(node.childNodes[0].nodeName).to.be.equal('A')
    })
  })

  describe('appendChild()', function () {
    describe('intersect content', function () {
      after(function () {
        document.body.removeChild(document.querySelector('#test'))
      })

      it('should create a test nodes in DOM', function () {
        createNodes([
          '<ul>',
          '<li>Hello</li>',
          '<li>World</li>',
          '</ul>'
        ].join(''))
        expect(document.querySelector('#test')).to.be.an('object')
      })

      it('should intersect custom HTML content between child nodes', function () {
        adppend('#test').appendChild('<a>Link</a>')
        var node = document.querySelector('#test > ul').childNodes[1]
        expect(node.nodeName).to.be.equal('DIV')
        expect(node.childNodes[0].nodeName).to.be.equal('A')
      })
    })

    describe('intersect content with custom percentage', function () {
      after(function () {
        document.body.removeChild(document.querySelector('#test'))
      })

      it('should create a test nodes in DOM', function () {
        createNodes([
          '<ul>',
          '<li>Hello</li>',
          '<li>World</li>',
          '<li>Chuck</li>',
          '<li>Norris</li>',
          '<li>Jackie</li>',
          '<li>Chan</li>',
          '</ul>'
        ].join(''))
        expect(document.querySelector('#test')).to.be.an('object')
      })

      it('should intersect custom HTML content between child nodes', function () {
        adppend('#test').percentage(25).appendChild('<a>Link</a>')
        var node = document.querySelector('#test > ul').childNodes[2]
        expect(node.nodeName).to.be.equal('DIV')
        expect(node.childNodes[0].nodeName).to.be.equal('A')
      })
    })
  })
})
