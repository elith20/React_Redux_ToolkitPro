async function request(url, method, body){
    const config = {
        method: method,
        headers: "Content-Type: application/json"
    }
    
    if(body){
       config.body = body.JSON.stringify()
    }

    try{
        const response = await fetch(url, config)
        const result = await response.json();
        if(response.error){
            throw(result.error)
        }
        return result
    } catch(error){
        throw error
    }

}

export default request