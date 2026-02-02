# Overview

The **FileUpload** component lets users select and upload files from their device to a server. It provides a simple, intuitive interface for file selection and transfer.

### Markup

```javascript
  <wm-fileupload
  cleariconclass="wi wi-clear"
  cleariconhint="Clear"
  name="fileupload"
  on-select="Variables.FileServiceUploadFile.invoke()"
  on-delete="Variables.FileServiceDeleteFile.invoke()"
></wm-fileupload>;
```

### Examples

#### Properties

- Specifies the allowed file types for upload.

```javascript
//Allow only image files to be uploaded
Page.Widgets.fileupload.contenttype = ".jpe .jpeg .gif .jpg .png image/*";
```

- Sets the maximum allowed file size (in MB) for uploads in the FileUpload component.

```javascript
// Limit file uploads to 10 MB
Page.Widgets.fileupload.maxfilesize = 10;
```

#### Events

- Triggered when the user selects one or more files in the FileUpload component.

```javascript
Page.fileuploadSelect = function ($event, widget, selectedFiles) {
    //Example: Bind the selected files as input to the variable/service
    Page.Variables.FileServiceUploadFile.setInput("files", selectedFiles);
    Page.Variables.FileServiceUploadFile.invoke();
};
```
