module.exports = (robot) ->

  robot.hear /Im tired/i, (res) ->
    res.send "coffee"
