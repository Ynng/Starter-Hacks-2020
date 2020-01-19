class PhysicQuestions {
    constructor(Name, Variables, Formula) {
        this.Name = Name;
        if (Variables instanceof Array) {
            this.Variables = Variables.slice();
        }
        this.Formula = Formula;
      }
      
}
function writeObjToJson() {
    variables = ["time", "distance"];
    Let physicsQuestion = new PhysicQuestions('Velocity', variables, 'distance/time');
    //sad

}