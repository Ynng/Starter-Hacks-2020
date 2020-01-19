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
    let physicsQuestion = new PhysicQuestions('Velocity', variables, 'distance/time');
    //sad really sad

}