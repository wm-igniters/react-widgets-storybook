# Overview

The **Tile** to highlight key metrics, summaries, or quick navigation items. Tiles provide built-in styling and layout structure that helps present content in a visually organized and easy-to-scan format.

### Markup

```javascript
<wm-tile class="bg-default" name="tile" variant="default:default">
    <wm-container height="100%" direction="row" width="fill" alignment="top-left" padding="8" name="container1"
        class="app-container-default" variant="default">
        <wm-container direction="row" alignment="top-center" padding="8px" width="25%" height="fill" name="container2"
            class="app-container-default" variant="default">
            <wm-icon name="tileIcon" iconclass="wi wi-bar-chart fa-3x" class="fa-xs" variant="default:xs">
            </wm-icon>
        </wm-container>
        <wm-container direction="column" alignment="top-center" padding="8px" width="75%" height="fill"
            name="container3" class="app-container-default" variant="default">
            <wm-label name="tileTitle" caption="title" class="p" fontunit="em" variant="default:p">
            </wm-label>
            <wm-label name="tileStatLabel" caption="00" fontunit="em" class="h1 p" variant="default:p">
            </wm-label>
        </wm-container>
    </wm-container>
</wm-tile>
```

### Examples

#### Properties

- This tile has a configurable class property which determines its CSS styling. This property can be set in the markup or dynamically via script to change the tile’s appearance based on user actions or application state.

```javascript
<wm-tile class="bg-info" name="tile" variant="default:info"></wm-tile>
```

```javascript
// Set the tile's CSS class dynamically to change its appearance
Page.Widgets.tile.class = "app-tile bg-info";
```

#### Events

- This is the markup for a tile with an on-mouseenter event, executed whenever the user hovers the mouse over the tile.

```javascript
<wm-tile on-mouseenter="tileMouseenter($event, widget)" name="tile"></wm-tile>
```

```javascript
Page.tileMouseenter = function ($event, widget) {
  // Highlight the tile by adding a CSS class when the user hovers over it
  widget.class = "app-tile bg-primary";
};
```


