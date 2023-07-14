// class Contact {
//   constructor(name,phone, address){
//       this.name = name;
//       this.phone = phone;
//       this.address = address;
//   }
  
// }
// class MenuOption extends Contact{
//   constructor() {
    
//       this.contacts = [];
//   }
//   delete();
//   add(){
//     this.contacts.push(new Contact("Chris", 5555555555, "California"));
//   }
// }





// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

class Actor {
  constructor(name, position) {
  this.name = name;
  this.position = position;
  }
  
  describe() {
  //console.log(`${this.name} plays ${this.position}`)
  return `${this.name} plays ${this.position}`;
  }
  }
  class Comedian {
  constructor(name) {
  this.name = name;
  this.actors = [];
  }
  
  addActor(actor) {
  if (actor instanceof Actor) {
  this.actors.push(actor);
  } else {
  throw new Error(`You can only add an instance of Actor. 
  argument is not a actors: ${actor}`);
  }
  }
  
  describe() {
  return `${this.name} has ${this.actors.length} actors.`;
  }
  }
  class Menu { // what drives the application and our choices
  constructor() {
  this.teams = [];
  this.selectedTeam = null; // manage one team at a time
  }
  
  start() { // entry point to application
  let selection = this.showMainMenuOptions(); 
  while (selection != 0) {
  switch(selection) {
  case '1' :
  this.createComedian();
  break;
  case '2' :
  this.viewComedian();
  break;
  case '3' :
  this.deleteComedian();
  break;
  case '4' :
  this.displayComedian();
  break;
  default:
  selection = 0;
  }
  selection = this.showMainMenuOptions();
  }
  alert('Goodbye!');
  }
  
  
  showMainMenuOptions() {
  return prompt(`
  0) exit
  1) create a new comedian
  2) view a comedian
  3) delete a comedian
  4) display all comedians
  `);
  }
  
  showTeamMenuOptions(teamInfo) {
  return prompt(`
  0) back
  1) add a new actor
  2) delete a actor
  -----------------
  ${actorInfo}
  `);
  }
  
  displayActors() {
  let teamString = '';
  for (let i = 0; i < this.actors.length; i++) {
  teamString += i+ ') ' + this.actors[i].name + '\n';
  }
  alert(actorString);
  }
  
  createComedian() {
  let name = prompt('Enter name for new comedian: ');
  this.comedians.push(new Comedian(name));
  }
  
  viewComedian() {
  let index = prompt("Enter the index of the comedian that you want to view:");
  if (index > -1 && index < this.comedians.length) {
  this.selectedComedian = this.comedians[index];
  let description = 'Comedian Name: ' + this.selectedComedian.name + '\n';
  description += ' ' + this.selectedComedian.describe() + '\n ';
  for (let i = 0; i < this.selectedComedian.actors.length; i++) {
  // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
  // + this.selectedTeam.players[i].position + '\n';
  description += i + ') ' + this.selectedComedian.actors[i].describe() + '\n';
  }
  let selection1 = this.showComedianMenuOptions(description);
  switch (selection1) {
  case '1' :
  this.createActor();
  break;
  case '2' :
  this.deleteActor();
  }
  } // validate user input
  }
  
  deleteActor() {
  let index = prompt('Enter the index of the Comedian that you wish to delete: ');
  if (index > -1 && index < this.comedians.length) {
  this.comedians.splice(index,1);
  }
  }
  
  
  createActor() {
  let name = prompt('Enter name for new actor: ');
  let position = prompt('Enter position for new actor: ');
  //this.selectedTeam.players.push(new Player(name, position));
  this.selectedComedian.addActor(new actorInfo(name,position));
  }
  
  deleteActor() {
  let index = prompt('Enter the index of the actor that you wish to delete: ');
  if (index > -1 && index < this.selectedComedian.actors.length) { this.selectedComedian.actors.splice(index,1);
  }
  }
  }
  let menu = new Menu();
  menu.start();
  