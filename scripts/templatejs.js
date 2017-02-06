module.exports = function(robot){

  robot.respond(/skip/i, function(msg){
    msg.emote("skipping!");
  });

  robot.hear(/your'e/i, function(msg){
    msg.send("you're");
  });


  robot.hear(/what year is it\?/i, function(msg){
    msg.reply(new Date().getFullYear());
  });


  robot.router.get("/foo", function(req, res){
    res.end("bar");
  });

}
