function skillsMember() {
  var skills = {
    name: 'John',
    age: 30,
    skills: ['JS', 'CSS', 'HTML']
  };

  for (var skill of skills.skills) {
    console.log(skill);
  }
}