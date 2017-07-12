const Boilerplate = require('./boilerplate');

module.exports = function(robot) {
  robot.on('issues.opened', async (context) => {
    const boilerplate = new Boilerplate();
    const title = context.payload.issue.title;
    const body = context.payload.issue.body;
    const cannedReply = "Thanks for your issue report, but unfortunately you haven't told us what the problem was. Please open a new issue describing your problem.";

    if (boilerplate.hasDefaultTitle(title) || boilerplate.hasOnlyDefaultBody(body)) {
      return context.github.issues.edit(context.issue({state: 'closed'})).then(() => {
        return context.github.issues.createComment(context.issue({body: cannedReply}));
      });
    }
  });
}
