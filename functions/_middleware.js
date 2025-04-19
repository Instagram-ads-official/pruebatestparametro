export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const fbclid = url.searchParams.get('fbclid');

  // Si hay fbclid en la URL, lo guardamos en cookie
  if (fbclid) {
    const response = await next();
    const cookie = `fbclid=${fbclid}; Path=/; Max-Age=86400; Secure; SameSite=Lax`;
    response.headers.append('Set-Cookie', cookie);
    return response;
  }

  // Continuar normalmente
  return next();
}
