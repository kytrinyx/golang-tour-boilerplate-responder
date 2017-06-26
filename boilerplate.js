module.exports = class Boilerplate {
  hasDefaultBody(text) {
    const body = /Change the title above to describe your issue and add your feedback here, including code if necessary/;
    return body.test(text);
  }

  hasDefaultTitle(text) {
    const title = /\[REPLACE WITH SHORT DESCRIPTION\]/;
    return title.test(text);
  }
}
