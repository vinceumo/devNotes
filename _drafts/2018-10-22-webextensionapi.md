---
layout: post
title: "Cross Browser extensions with WebExtensions API"
date: 2018-10-22 01:32:19 +0100
categories: Javascript
---

A browser extensions add features and functionalities to a browser. It use web technologies such as HTML, CSS, and JS.

## Manifest.json

The only file that a browser extension need is the `manifest.json` file.

> Using manifest.json, you specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality, such as background scripts, content scripts, and browser actions.
> [MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

The manifest.json keys dependent on the extension you are developing.

You can find the available keys on [manifest.json - MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

### Example:

```json
{
  //Mandatory
  "manifest_version": 2,
  "name": "Name of your extension",
  "version": "1.0.0",

  // Recommended
  "default_locale": "en",
  "description": "Extension description",
  "author": "Your Name",
  "homepage_url": "https://github.com/vinceumo",
  "icons": {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

## Add and Debugging a browser extension locally

### Firefox

#### Add extension

- Navigate to `about:debugging`
- Check **Enable add-on debugging**
- Click on **Load Temporary Add-on**
- Select the _manifest.json_ file

#### Debugging extension

- Navigate to `about:debugging`
- Find your extension
- Click on **Debug**
- Developer toll will open

### Chrome

#### Add extension

- Navigate to `chrome://extensions/`
- Click on **Load unpacked**
- Select the extension folder

#### Debugging extension

Background script errors can be shown when the package is loaded.

- Navigate to `chrome://extensions/`
- Find your extension
- Click on the **errors** button (Will show only if errors)
- Click on `View in Developer Tools`

To debug a popup extension:

- Open the popup
- Right click in the popup
- Click on Inspect

[Chrome - Debugging Extensions](https://developer.chrome.com/extensions/tut_debugging)

### Edge

To debug a popup extension:

- Open the popup
- Right click in the popup
- Click on Inspect element

[Microsoft Edge - Debugging Extensions](https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/debugging-extensions)

#### Add extension

- Navigate to `about:flags`
- Check **Enable extension developer features**
- Click on the **Settings and More** icon (3 dots icon on the right)
- Select **Extensions** from this menu
- Click on **Load extension**
- Select the extension folder

#### Debugging extension

## Cross browser extension using a polyfill

[mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill) allows browsers to use Promise-based WebExtension APIs. Some browsers might style need some adjustments.

## Share extension

## Firefox

## Chrome

## Opera

## Example of a popup extension

I developed recently the browser extension [A11Y-Color-Blindness-Empathy-Test-browser-extensions](https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test-browser-extensions).

This extension is a popup extension that inject an inline svg for filtering colors, some style and change the class of the `html` tag of the current tab open, depending on the picked radio button.

The extension will follow this structure:

```
WebExtension
|   manifest.json // Give permissions to the active Tab and reference the popup `choose_test.html`
|
+---content_scripts
|       runTest.js // Script interacting with the active tab
|
+---icons
|       icon128.png
|       icon16.png
|       icon32.png
|       icon48.png
|
+---polyfills
|       browser-polyfill.js // Polyfill for chrome and opera
|
\---popup
        choose_test.css // Style of the popup
        choose_test.html // Markup of the popup
        choose_test.js // Script of the popup, click handler
```

- [permissions]()
- [Browser_action]()
- [tabs]()
- [Content scripts]()

## Resources

- [Microsoft Edge extension API roadmap](https://docs.microsoft.com/en-us/microsoft-edge/extensions/api-support/extension-api-roadmap)
- [MDN - Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [W3C - Browser extensions](https://www.w3.org/community/browserext/)
- [webextensions-examples - Github](https://github.com/mdn/webextensions-examples)
