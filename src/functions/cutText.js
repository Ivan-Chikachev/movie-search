export default (text) => {
    text = text.split(' ');
    if (text.length > 30) {
        text = [...text.slice(0, 30), '...'];
    }
    return text.join(' ');
};
