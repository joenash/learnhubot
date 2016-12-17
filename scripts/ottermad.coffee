module.exports = (robot) ->
  robot.hear /hello ottermad/i, (res) ->
    res.send "Hi Ottermad"
