# JS-Tooltip
This repository is an easy configurable tooltip library in JS : you can define if you want a fixed tooltip, or a moving tooltip (following your cursor). You can change also the delay before the tooltip will be completely displayed.
## Get started
In your HTML file, add the CSS file into your head :

    <link rel="stylesheet" href="tooltip.css">
    
And add the JS file just before the end of your body :

    <script src="tooltip.js"></script>
    
To display a tooltip on a mouseover, use this :

    <a href="#" onmouseover="show(message, delay, fixed)" onmouseout="hide()"></a>
    
## Explanations

In the show() function, there are three arguments. The two last ones are optionnals.

- message : the message which will be displayed in your tooltip. You can use HTML.
- delay : the time (in ms) before your tooltip will be fully displayed. Default value is 0.
- fixed : set this argument to `this` if you want your tooltip to have a fixed position next to your link. Otherwise, the tooltip will follow your cursor.

So `show(message)` is the same as `show(message, 0, false)`.

Note : don't forget to write `onmouseout="hide()"` !

## Customisable tooltip

In `tooltip.css`, you can easily customise your tooltip. You can change everything except the two second lines :

      position: absolute;
      opacity: 0;

## Try this out !

Although only `tooltip.js` and `tooltip.css` are necessary in this repository, you can try this tooltip library using `example.html`.
