module.exports = function(robot) {
  robot.on('issues.opened', async (event,  context) => {
    const title = event.payload.issue.title;
    const rgxTitle = /[REPLACE WITH SHORT DESCRIPTION]/;

    const body = event.payload.issue.body;
    const rgxBody = /Change the title above to describe your issue and add your feedback here, including code if necessary/;

    const cannedReply = "Please edit the title and body of your issue to describe your problem. Be sure to delete the boilerplate. Once you've done this, you may reopen the issue.";

    if (title.match(rgxTitle) || body.match(rgxBody)) {
      return context.github.issues.edit(context.issue({state: 'closed'})).then(() => {
        return context.github.issues.createComment(context.issue({body: cannedReply}));
      });
    }
  });
}
