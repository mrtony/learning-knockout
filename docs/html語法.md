HTML
===

one way
```
<p>First name: <strong data-bind="text: firstName"></strong></p>
<p>Last name: <strong data-bind="text: lastName"></strong></p>

  // Here's my data model
  var ViewModel = function(first, last) {
    // this.firstName = ko.observable(first);
    // this.lastName = ko.observable(last);
    this.firstName = "Planet2";
    this.lastName = "Earth";
  };
 
  //ko.applyBindings(new ViewModel("Planet2", "Earth")); // This makes Knockout get to work
  ko.applyBindings(new ViewModel());
```

two way: 注意, `input中的data-bind的屬性是value`
```
  <p>First name: <input data-bind="value: firstName" /></p>
  <p>Last name: <input data-bind="value: lastName" /></p>
  <h2>Hello, <span data-bind="text: fullName"> </span>!</h2>

  var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.pureComputed(function() {
        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        return this.firstName() + " " + this.lastName();
    }, this);
  };
 
  ko.applyBindings(new ViewModel("Planet2", "Earth")); // This makes Knockout get to work
```

