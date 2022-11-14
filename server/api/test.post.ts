export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  console.log(event.req);
  return {
    ok: true,
    message: `your body is ${JSON.stringify(body)}`
  }
})