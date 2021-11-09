import numbersMap from "./numbersMap";

const turnNumberToPersian = (text) => {
    const newText = text.toString().split('').map(num => numbersMap[num]);
    return newText.join('');
}

export default turnNumberToPersian;