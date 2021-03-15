export default (name) => {
    let first = name[0]
    let second = '';
    for(let i = 1; i < name.length; i++){
        if (name[i] === ' ') {
            second = name[i+1]
            break
        }
    }
    return (first.toUpperCase() + '. ' + second.toUpperCase() + '.')
};
