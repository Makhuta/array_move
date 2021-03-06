module.exports = {
    async run({ array, number_to_move }) {
        number_to_move = number_to_move ? number_to_move : 1;

        if (!array || array.length < 1) return console.error("There is no array.");
        if (array.length == 1) return array;

        for (let m = 0; m < number_to_move; m++) {
            let shifted_number = array.shift();
            array.push(shifted_number);
        }
        return array




    }
}