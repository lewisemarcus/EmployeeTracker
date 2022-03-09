//Capitalizes first letters of first and last name.
function capitalizeFirstLetter(string) {
    string = string.split(' ')
    for(let each of string) {
        each.charAt(0).toUpperCase() + each.slice(1).toLowerCase()
    }
    return string.join(" ")
}

export { capitalizeFirstLetter }