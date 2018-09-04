const Park = function(name, price){
  this.name = name;
  this.price =price;
  this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function(){
  return this.dinosaurs.length;
}

Park.prototype.addDinosaurs = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurs = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.mostVisitedDinosaurOne = function(){
   return Math.max(this.dinosaurs.guestsAttractedPerDay);
}

Park.prototype.mostVisitedDinosaur = function(){
  let popularDinosour = this.dinosaurs[0];
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > popularDinosour.guestsAttractedPerDay) {
      popularDinosour = dinosaur;
    }
  }
  return popularDinosour.species;
}

Park.prototype.mostVisitedDinosaurOne = function(){
   return Math.max(this.dinosaurs.guestsAttractedPerDay);
}

Park.prototype.allDinosaurOfSpecies = function(species){
  let allDinosOfKind = [];
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
        allDinosOfKind.push(dinosaur)
    }
  }
    return allDinosOfKind.length;
}

Park.prototype.removeDinosaursOfKind = function(species){
  let dinosaoursLeft = [];
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species !== species){
        dinosaoursLeft.push(dinosaur)
    }
  }
  this.dinosaurs = dinosaoursLeft;
}

Park.prototype.calculateNumberOfVisitors = function(){
  let totalVisitors = 0;
  for (let dinosaur of this.dinosaurs){
    totalVisitors = dinosaur.guestsAttractedPerDay += totalVisitors;
  }
  return totalVisitors;
}

Park.prototype.calculateNumberOfVisitorsPerYear = function(){
  return this.calculateNumberOfVisitors() * 365;
}

Park.prototype.calculateYearlyRevenue = function(){
    return this.calculateNumberOfVisitorsPerYear() * this.price;
}

Park.prototype.getAllDiets = function(){
  let allDiets = {};
  for(let dinosaur of this.dinosaurs){
    
  }
}

module.exports = Park;
