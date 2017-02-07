'use strict';
(function () {
  var person = {
    age: 30,
    isMarried: true,
    children: ['Jonnie', 'Jane', 'Richard', 'Mary'],
    selectedChildren: ['Jonnie', 'Mary'],
    sons: [{
        "id": 1,
        "firstName": "Ernest",
        age: 3
      }, {
        "id": 2,
        "firstName": "Patricia",
        age: 5
      }, {
        "id": 3,
        "firstName": "Jean",
        age: 7        
      }, {
        "id": 4,
        "firstName": "John",
        age: 9        
      }, {
        "id": 5,
        "firstName": "Raymond",
        age: 11        
      }]
  };

  var son = function() {
    var self = this;
    self.id = ko.observable();
    self.firstName = ko.observable();
    self.age = ko.observable(); 
    self.selected = ko.observable(false);   
  }

  var model = function() {
    var self = this;
    self.age = ko.observable(person.age);
    self.aboutEnable = ko.observable(false);
    self.isMarried = ko.observable(person.isMarried);
    self.isMarried.subscribe(function() {
      $.each(self.sons(), function(index, value) {
        self.sons()[index].selected(self.isMarried());
      })
      console.log('check toggle');
    });
    self.children = person.children;
    self.selectedChildren = person.selectedChildren;  
    self.sons = ko.observableArray([]);
    self.selectedSon = ko.observable(new son().id(50).firstName('test').age(20));
    self.selectedSon2 = ko.observable(new son().id(52).firstName('test2').age(22));
    self.removeSon = function(son) {
      self.sons.remove(son);
    }
    console.log(self.selectedSon().firstName());
    self.growOld = function() {
      var previousAge = self.age();
      self.age(previousAge + 1);
    };
    self.showAbout = function() {
      self.aboutEnable(true);
    }
    self.hideAbout = function() {
      self.aboutEnable(false);
    }
  }

  var loadSons = function loadSons(p_model) {
    $.each(person.sons, function(index, value) {
      p_model.sons.push(new son().id(value.id).firstName(value.firstName).age(value.age));
    })
  }
  
  var vm = new model();

  loadSons(vm);
  ko.applyBindings(vm); // This makes Knockout get to work
})();
