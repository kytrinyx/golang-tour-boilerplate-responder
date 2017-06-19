# Golang Tour Boilerplate Responder

On a regular basis, people [open issues][issues] directly from the tour without editing the boilerplate.

This is a probot plugin that will respond with a canned reply and close the issue.

The values for the issue boilerplate are described in the [static/js/values.js][values-file], in
`translation.issue-title` and `translation.issue-message`.

## Configuration

Since the golang/tour repository is a mirror (not a source) on GitHub, it does not (and admittedly should not) have a `.github` directory.

Rather than have a configurable bot, this bot hard-codes the boilerplate to match on as well as the canned reply for the bot's response.

[issues]: https://github.com/golang/tour/issues?utf8=%E2%9C%93&q=is%3Aissue%20in%3Atitle%20%5BREPLACE%20WITH%20SHORT%20DESCRIPTION%5D
[values-file]: https://github.com/golang/tour/blob/master/static/js/values.js
