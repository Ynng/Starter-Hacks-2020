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
    for (i = 0; i < jsonObj.length; i++) {
        names[i] = "#" + jsonObj[i]["Name"];
    }
    console.log(jsonObj);
    console.log(names);
    return names;

}

function getVariablesOfFunction(nameOfFunction, jsonObj) {
    arrayOfMatchedName = [];
    tempArray = [];
    symbolArray = [];
    for (i = 0; i < jsonObj.length; i++) {
        if (jsonObj[i]["Name"] = nameOfFunction) {
            arrayOfMatchedName = jsonObj[i];
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

