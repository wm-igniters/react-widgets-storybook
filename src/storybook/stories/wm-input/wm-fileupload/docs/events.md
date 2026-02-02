# Callback Events

<details open>
  <summary>Callback Events</summary>
    <div>
        | Event | Description |
        | --- | --- |
        | `onBeforeSelect` | This event handler is called before the upload of the file. It can be used to perform any validations before the file is further processed. |
        | `onSelect` | This event handler is called when the files are selected. By default, it invokes the Service Variable to upload the selected files. Deleting this variable will set the FileUpload to act as a file selector. |
        | `onError` | This event is called if there is an error generated during the Service call. An additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables. |
        | `onBeforeDelete` | This event handler is called before the onDelete event is triggered. |
        | `onDelete` | This event handler is called when the delete icon is clicked, By default, it invokes the Service Variable to delete the selected files |
    </div>
</details>