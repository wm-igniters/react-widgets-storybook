# Overview

The **Card** component is a flexible UI element for displaying content like titles, images, icons, and action buttons in a structured layout. It is responsive and adapts to different screen sizes. Cards are typically placed inside a List component, where they can be bound to a dataset from databases, queries, or web services. Each card can display dynamic data and support interactive actions through buttons, making it ideal for displaying products, user profiles, or summarized information.

### Markup

```javascript
<wm-card name="card" class="app-card card-default" variant="default">
    <wm-card-content fontsize="0.8" fontunit="em" name="card_content">
        <wm-container direction="column" alignment="middle-center" gap="8" width="280" wrap="false" padding="12px"
            class="app-container-default" variant="default" name="container8">
            <wm-picture resizemode="cover" class="img-rounded" variant="default:rounded" width="100%"
                picturesource="resources/images/imagelists/login-bg.jpg" name="Picture"></wm-picture>
            <wm-container direction="column" alignment="top-left" gap="4" width="fill" wrap="false"
                class="app-container-default" variant="default" name="container9">
                <wm-label padding="unset" caption="Item Title" class="h5 p" type="p"
                    variant="default:p" show="true" required="required" name="Title"></wm-label>
            </wm-container>
            <wm-container direction="row" alignment="middle-right" gap="4" width="fill" class="app-container-default"
                variant="default" height="hug" name="container10">
                <wm-button class="btn-transparent" caption="" type="button" margin="unset" variant="transparent"
                    name="buttonEdit" iconclass="wi wi-mode-edit"></wm-button>
                <wm-button class="btn-transparent" caption="" type="button" margin="unset" variant="transparent"
                    name="buttonDelete" iconclass="wi wi-delete"></wm-button>
            </wm-container>
        </wm-container>
    </wm-card-content>
</wm-card>
```

### Examples

#### Properties 

- Sets or updates the title of the Card component.

```javascript
Page.Widgets.card.title = "Products";
```

- Applies an entry animation to the Card component when it is rendered.

```javascript
Page.Widgets.card.animation = "bounceIn";
```

#### Events 

- Triggered when a standalone Card component (not placed inside a List) is clicked.

```javascript
Page.cardClick = function ($event, widget) {
    // Example: Toggle visibility of a details panel for this card
    Page.Widgets.cardDetailsPanel.show = !Page.Widgets.cardDetailsPanel.show;

    // Optionally, call a service to fetch related information
    Page.Variables.getDashboardMetrics.invoke();
};
```

- Triggered when a Card component inside a List is clicked.

```javascript
Page.cardClick = function ($event, widget, item, currentItemWidgets) {
    // Assign the clicked item's productId to an app-level variable
    App.Variables.reportConfig.dataSet.productId = item.productId;

    // Optionally, pass the productId as a page parameter while navigating
    App.Actions.goToPage_ProductsDetails.invoke();
};
```





<!-- ```javascript
<wm-list listclass="list-group" template="true" template-name="Media Card" itemsperrow="auto" class="list-card"
    statehandler="URL" name="stvCardsDataList" dataset="bind:Variables.stvCardsData.dataSet" navigation="Basic"
    variant="standard">
    <wm-listtemplate layout="media" name="listtemplate">
        <wm-card name="card" class="app-card card-default" variant="default">
            <wm-card-content fontsize="0.8" fontunit="em" name="card_content">
                <wm-container direction="column" alignment="middle-center" gap="8" width="280" wrap="false"
                    padding="12px" class="app-container-default" variant="default" name="container8">
                    <wm-picture resizemode="cover" class="img-rounded" variant="default:rounded" width="100%"
                        picturesource="bind:Widgets.stvCardsDataList.currentItem.image" name="Picture"></wm-picture>
                    <wm-container direction="column" alignment="top-left" gap="4" width="fill" wrap="false"
                        class="app-container-default" variant="default" name="container9">
                        <wm-label padding="unset" caption="bind:Variables.stvCardsData.dataSet[$i].title" class="h5 p"
                            type="p" variant="default:p" show="true" required="required" name="Title"></wm-label>
                    </wm-container>
                    <wm-container direction="row" alignment="middle-right" gap="4" width="fill"
                        class="app-container-default" variant="default" height="hug" name="container10">
                        <wm-button class="btn-transparent" caption="" type="button" margin="unset" variant="transparent"
                            name="buttonEdit" iconclass="wi wi-mode-edit"></wm-button>
                        <wm-button class="btn-transparent" caption="" type="button" margin="unset" variant="transparent"
                            name="buttonDelete" iconclass="wi wi-delete"></wm-button>
                    </wm-container>
                </wm-container>
            </wm-card-content>
        </wm-card>
    </wm-listtemplate>
</wm-list>
``` -->
