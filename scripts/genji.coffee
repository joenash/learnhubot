module.exports = (robot) ->
  robot.hear /dragonblade/i, (res) ->
    res.send "Ryūjin no ken o kurae!"
