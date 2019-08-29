/**
 * Formatting the errors
 * @param {*} details 
 */
function formatError(details) {
    
    let messageArr = [];
    details.forEach(({message, context}) => {
        messageArr.push({ key: context.key, message: message.replace(/['"]/g, '') });
    });
   
    return messageArr;
}

export {
    formatError
}