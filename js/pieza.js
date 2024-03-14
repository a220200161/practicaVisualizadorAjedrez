class pieza {
  constructor(name, team, ordered, abscissa, isActive, doubleStep) {
    this.name = name;
    this.team = team;
    this.ordered = ordered;
    this.abscissa = abscissa;
    this.isActive = isActive;
    this.doubleStep = doubleStep;
  }

  getName() {
    return this.name;
  }
  getTeam() {
    return this.team;
  }
  getOrdered() {
    return this.ordered;
  }
  getAbscissa() {
    return this.abscissa;
  }
  getIsActive() {
    return this.isActive;
  }
  hasDoubleStep() {
    return this.doubleStep;
  }

  setName(newName) {
    this.name = newName;
  }
  setTeam(newTeam) {
    this.team = newTeam;
  }
  setOrdered(newOrdered) {
    this.ordered = newOrdered;
  }
  setAbscissa(newAbscissa) {
    this.abscissa = newAbscissa;
  }
  setIsActive(newIsActive) {
    this.isActive = newIsActive;
  }
  setDoubleStep(newDoubleStep) {
    this.doubleStep = newDoubleStep;
  }
}
