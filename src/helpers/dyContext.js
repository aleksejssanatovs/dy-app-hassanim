
const setDYContext = (type, data) => {
    window.DY = window.DY || {};
    // eslint-disable-next-line
    DY.recommendationContext = { type: type, data: data };
}

export default setDYContext;