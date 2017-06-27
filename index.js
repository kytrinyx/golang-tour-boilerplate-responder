const Boilerplate = require('./boilerplate');

module.exports = function(robot) {
  robot.on('issues.opened', async (context) => {
    const boilerplate = new Boilerplate();
    const title = context.payload.issue.title;
    const body = context.payload.issue.body;
    const cannedReply = "Thanks for your issue report, but unfortunately you haven't told us what the problem was. Please edit the title and body of your issue to describe your problem. Be sure to delete the boilerplate. Once you've done this, you may reopen the issue.";

    if (boilerplate.hasDefaultTitle(title) || boilerplate.hasOnlyDefaultBody(body)) {
      return context.github.issues.edit(context.issue({state: 'closed'})).then(() => {
        return context.github.issues.createComment(context.issue({body: cannedReply}));
      });
    }
  });
}
