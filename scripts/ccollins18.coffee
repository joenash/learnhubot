module.exports = (robot) ->

  robot.hear /potato 1/i, (res) ->
    res.send "in the ground"
