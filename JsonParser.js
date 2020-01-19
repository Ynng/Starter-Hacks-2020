class PhysicQuestions {
    constructor(Name, Variables, Formula) {
        this.Name = Name;
        if (Variables instanceof Array) {
            this.Variables = Variables.slice();
        }
        this.Formula = Formula;
    }

}
testJson = '[{"Name": "Magnetic field intensity","Components": [{ "Name": "Magnetic_field_intensity", "Symbol": "B" },{ "Name": "Distance", "Symbol": "d" },{ "Name": "Current", "Symbol": "I" }],"Formula": ["-B + 4 * 3.14 * 10 ^ -7 * I / 2 / 3.14 / d"]}]';
jsonObj = JSON.parse(testJson);


function getNames() {
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
    arrayOfMatchedName = [];
    tempArray = [];
    symbolArray = [];
    for (i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i]["Name"] = nameOfFunction) {
            arrayOfMatchedName =jsonObj[i];
        }
    }
    console.log(arrayOfMatchedName);
        for (i = 0; i < arrayOfMatchedName["Components"].length; i++) {
            tempArray.push(arrayOfMatchedName["Components"][i]);
        }
        for (i = 0; i < tempArray.length; i++) {
            symbolArray.push(tempArray[i]["Symbol"]);
        }
        console.log(symbolArray);
        return symbolArray;
}

getNames(); 
getVariablesOfFunction("Magnetic field intensity");

