module.exports = function(robot){
  robot.respond(/numberfact (\d+)/i, function(msg){
    const num = msg.match[1];
    robot.http('http://numbersapi.com/' + num).get()
      (function(err, resp, body) {
          msg.send(body);
      })
  });
}
