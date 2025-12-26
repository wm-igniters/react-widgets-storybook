# Callback Events

| Event | Description |
|-------|-------------|
| onBeforeSelect | Triggered before the upload process begins; can be used for validation |
| onSelect | Triggered when files are selected by the user; by default invokes the service variable to upload files |

## Service Variable Events

The following events are available on the service variable associated with the FileUpload component:

| Event | Description |
|-------|-------------|
| onAbort | Triggered when file upload is aborted |
| onBeforeUpdate | Triggered just before the variable calls the target service; can prevent service call by returning false |
| onResult | Triggered when the variable receives a response from the target service |
| onProgress | Triggered during file upload to track progress |
| onError | Triggered when an error occurs during the service call |
| onBeforeDatasetReady | Triggered before the variable's dataset is updated; opportunity to manipulate data |
| onCanUpdate | Similar to onBeforeDatasetReady; gives opportunity to modify data before variable update |
| onSuccess | Triggered when the variable has completed its lifecycle; good for triggering dependent actions |