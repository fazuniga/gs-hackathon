
export async function getCategoryFromAgent(messages : any) {
    const url = process.env.CODEGPT_API_URL;
    
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.CODEGPT_API_KEY}`
        },
        body: JSON.stringify({
            agentId: `${process.env.CODEGPT_AGENT_ID_CATEGORY}`,
            messages: messages,
            format: 'text',
            stream: true
        })
    };
    
    if (!url) {
        throw new Error('CODEGPT_API_URL is not defined');
    }
    
    const response = await fetch(url, options);
    const data = await response.text()
    return data
}

export async function getSeverityFromAgent(messages : any) {
    const url = process.env.CODEGPT_API_URL;
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.CODEGPT_API_KEY}`
        },
        body: JSON.stringify({
            agentId: `${process.env.CODEGPT_AGENT_ID_SEVERITY}`,
            messages: messages,
            format: 'text',
            stream: true
        })
    };

    if (!url) {
        throw new Error('CODEGPT_API_URL is not defined');
    }

    const response = await fetch(url, options);
    const data = await response.text()
    return data
}