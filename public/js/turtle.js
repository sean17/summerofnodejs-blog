// Dont't normally make games so please pardon any inelegance.
$(function() {
  var START_X = -1525
  var START_Y = -32
  // TODO: try canvas, maybe easier to position on screem.
  var scene = sjs.Scene({
    w: $(document).width()  - 0
  , h: $(document).height() - 0
  })

  function moveTurtle(scene, sp) {
    var vel = 1
    var velincr = setInterval(function() {
      vel += 1
    }, 50)

    var interval = setInterval(function() {
      sp.move(vel, 0)
      if (sp.x > scene.w) { // stop, reset everything
        vel = 1
        clearInterval(interval)
        clearInterval(velincr)
        // put at correct starting spot!
        sp.x = START_X
        sp.y = START_Y
      }
      sp.update()

    }, 1000/60)
  }

  scene.loadImages([ '/img/turtle.png' ], function() {
    var sp = scene.Sprite('/img/turtle.png')

    sp.move(START_X, START_Y)
    sp.rotate(3.14 / 4)
    sp.update()

    $('#apply').mouseenter(function() {
      moveTurtle(scene, sp)
    })
  })
})
