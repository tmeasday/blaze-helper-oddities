if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to blaze-test.";
  };
  
  Template.hello.helpers({
    kind: 'myKind'
  });
}
