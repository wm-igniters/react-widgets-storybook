# Callback Events

The iframe component does not expose any specific callback events. Interactions with content inside the iframe are governed by the embedded content itself and may not be directly accessible to the parent application due to browser security restrictions (same-origin policy).

If you need to communicate between your application and the iframe content, consider these approaches:

1. Use postMessage API if you control both the parent and iframe content
2. Use URL parameters or fragment identifiers in the iframe source URL
3. Implement a shared backend service that both applications can communicate with