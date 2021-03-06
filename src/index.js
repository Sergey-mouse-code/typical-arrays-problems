exports.min = function min(array) {

    if (Array.isArray(array) && array.length >= 1) {
        let length = array.length;
        if (length === 1) return array;
        for (let i = 1; i < length; i++) {
            let searchIndex = i - 1;
            let currentIndex = array[i];
            while (searchIndex >= 0 && array[searchIndex] > currentIndex) {
                array[searchIndex + 1] = array[searchIndex];
                searchIndex--;

            }
            array[searchIndex + 1] = currentIndex;
        }
        return array[0];
    }
    return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length >= 1) {
        let length = array.length;
        if (length === 1) return array;
        for (let i = 1; i < length; i++) {
            let searchIndex = i - 1;
            let currentIndex = array[i];
            while (searchIndex >= 0 && array[searchIndex] > currentIndex) {
                array[searchIndex + 1] = array[searchIndex];
                searchIndex--;

            }
            array[searchIndex + 1] = currentIndex;
        }
        return array[length - 1];
    }

    return 0;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length >= 1) {
        let length = array.length;
        if (length === 1) return array;
        const reducer = (accumulator, value) => accumulator + value;
        return array.reduce(reducer) / length;
    }
    return 0;
}