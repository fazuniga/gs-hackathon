import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
    const { messages } = await request.json()
    try {
        const response = await fetch(process.env.CODEGPT_API_URL ?? '', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.CODEGPT_API_KEY}`,
            },
            body: JSON.stringify({
                agentId: `${process.env.CODEGPT_AGENT_ID}`,
                messages,
                stream: true,
            }),
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return Response.json({ status: 200, response: data });
    } catch (error) {
        console.error('Error posting category data:', error);
        return Response.json({ status: 500, error: 'Internal Server Error' });
    }
}