let paused = true;

export async function GET(request: Request) {
    return (
        new Response(paused.toString())
    )
}

export async function POST(request: Request) {
    paused = !paused;

    return new Response('Done!', {
        status: 200,
    });
}