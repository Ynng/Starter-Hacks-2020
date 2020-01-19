class PhysicsQuestions {
    constructor(Name, Variables, Formula) {
        this.Name = Name;
        if (Variables instanceof Array) {
            this.Variables = Variables.slice();
        }
        this.Formula = Formula;
    }

}

function getNames(jsonObj) {
    names = [];
    for (j = 0; j < jsonObj.length; j++) {
        names[j] = "#" + jsonObj[j]["Name"];
    }
    console.log(jsonObj);
    console.log(names);
    return names;

}

function getVariablesOfFunction(nameOfFunction, jsonObj) {
    console.log(jsonObj)
    arrayOfMatchedName = [];
    tempArray = [];
    symbolArray = [];
    for (j = 0; j < jsonObj.length; j++) {
        if (jsonObj[j]["Name"] == nameOfFunction) {
            arrayOfMatchedName = jsonObj[j];
        }
    }
    console.log(arrayOfMatchedName);
    for (j = 0; j < arrayOfMatchedName["Components"].length; j++) {
        tempArray.push(arrayOfMatchedName["Components"][j]);
    }
    for (j = 0; j < tempArray.length; j++) {
        symbolArray.push(tempArray[j]["Symbol"]);
    }
    console.log(symbolArray);
    return symbolArray;
}


