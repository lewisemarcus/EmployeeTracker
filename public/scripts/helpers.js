//Capitalizes first letters of first and last name.
function capitalizeFirstLetter(string) {
    string = string.split(' ')
    let newString = ''
    for (let each of string) {
        each = each.charAt(0).toUpperCase() + each.slice(1).toLowerCase()
        newString += each + " "
    }

    return newString
}

export { capitalizeFirstLetter }