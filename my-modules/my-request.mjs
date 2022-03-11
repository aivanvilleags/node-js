const REQUEST_TIMEOUT = 500;

const encrypt = (data) => {
    return 'encryped data'
}

const send = (url, data) => {
    const encryptedData =  encrypt(data)
    console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {
    REQUEST_TIMEOUT,
    send
}

// export { functions }