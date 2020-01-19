class PhysicQuestions {
    constructor(Name, Variables, Formula) {
        this.Name = Name;
        if (Variables instanceof Array) {
            this.Variables = Variables.slice();
        }
        this.Formula = Formula;
    }

}
testJson = '[{"Name": "Velocity","Variables": ["time","distance"],"Formula": "distance/time"},{"Name": "Acceleration","Variables": ["time2","distance2"],"Formula": "distance/time2"}]';
jsonObj = JSON.parse(testJson);


function writeObjToJson() {
    variables = ["time", "distance"];
    variables2 = ["time2", "distance2"];
    let physicsQuestion = new PhysicQuestions('Velocity', variables, 'distance/time');
    let physicsQuestion2 = new PhysicQuestions('Acceleration', variables, 'distance/time2');
    var arr = [physicsQuestion, physicsQuestion2];
    names = [];
    for (i = 0; i < jsonObj.length; i++) {
        names[i] = jsonObj[i]["Name"];
    }
    console.log(jsonObj);
    console.log(names);
    return names;

}
function getVariablesOfFunction(nameOfFunction) {

}

writeObjToJson();