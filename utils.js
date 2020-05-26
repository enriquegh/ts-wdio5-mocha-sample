cloneCapabilities = (capabilities, numberOfClones) => {
    const capsList = []
    for (let index = 0; index < numberOfClones; index++) {
        capsList.push(capabilities);
        
    }
    return capsList
}

module.exports = cloneCapabilities