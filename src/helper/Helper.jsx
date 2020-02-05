export const QueryString = (x) => {
    return Object.keys(x).map((key) => {
        return key + '=' + x[key]
    }).join('&');
}