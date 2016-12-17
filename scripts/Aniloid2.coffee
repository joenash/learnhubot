module.exports = (robot) ->

  robot.hear /who rules oranges/i, (res) ->
      res.send "HELLO BRIANO"
