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
    variables2 = ["time2", "distance2"];
    let physicsQuestion = new PhysicQuestions('Velocity', variables, 'distance/time');
    let physicsQuestion2 = new PhysicQuestions('Acceleration', variables, 'distance/time2');
    var arr = [ physicsQuestion,  physicsQuestion2];
    console.log(JSON.stringify(arr));

}

writeObjToJson();