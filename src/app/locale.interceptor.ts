import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

export const localeInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const vercelId = req.headers.get('x-vercel-id');
    console.log('request intercept');
    
    console.log('req headers: ', req.headers);
    console.log('vercelId:', vercelId);
    
    return next(req)
}

// export class LocaleInterceptor implements HttpInterceptor {
// 	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// 		// Clone the request to add the new header.
// 		const clonedRequest = req.clone();

// 		return next.handle(clonedRequest).pipe(
// 			tap(event => {
// 				if (event.type === 0) {
// 					console.log('Request Headers:', req.headers.keys());
// 				} else if (event.type === 4) {
// 					// Response Headers
// 					const headers = (event as any).headers;
// 					console.log('Response Headers:', headers.keys());

// 					// Example: Accessing specific Vercel headers
// 					const vercelId = headers.get('x-vercel-id');
// 					if (vercelId) {
// 						console.log('Vercel ID:', vercelId);
// 					}
// 				}
// 			})
// 		);
// 	}
// }
