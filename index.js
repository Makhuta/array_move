module.exports = {
    forward({ array, number_to_move }) {return require("src/forward.js")({ array, number_to_move })},
    backward({ array, number_to_move }) {return require("src/backward.js")({ array, number_to_move })}
}