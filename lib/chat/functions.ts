async function getResponseFromAgent(agentId: string, messages: any) {
    const url = process.env.CODEGPT_API_URL;

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.CODEGPT_API_KEY}`
        },
        body: JSON.stringify({
            agentId: agentId,
            messages: messages,
            format: 'text',
            stream: true
        })
    };

    if (!url) {
        throw new Error('CODEGPT_API_URL is not defined');
    }

    const response = await fetch(url, options);
    const data = await response.text();
    return data;
}

// Usage examples
export async function getCategoryFromAgent(messages: any) {
    const agentId = process.env.CODEGPT_AGENT_ID_CATEGORY;
    if (!agentId) {
        throw new Error('CODEGPT_AGENT_ID_CATEGORY is not defined');
    }
    return getResponseFromAgent(agentId, messages);
}

export async function getSeverityFromAgent(messages: any) {
    const agentId = process.env.CODEGPT_AGENT_ID_SEVERITY;
    if (!agentId) {
        throw new Error('CODEGPT_AGENT_ID_SEVERITY is not defined');
    }
    return getResponseFromAgent(agentId, messages);
}
