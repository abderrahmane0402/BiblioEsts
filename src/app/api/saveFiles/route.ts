export async function POST(request:Request){
    const body = await (await request.formData()).get('image')
    console.log(body);
}
export async function GET(request: Request) {
    return new Response('Hello, Next.js!')
  }