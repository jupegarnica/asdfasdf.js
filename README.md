# ASDFASDF.JS
### -Auto Save Data Form-
### **The easiest way to not let your users lose their data while filling a form.**

Feel free to submit any [suggestions/issues](https://github.com/jupegarnica/asdfasdf.js/issues) and [contribute](https://github.com/jupegarnica/asdfasdf.js/pulls).

# DEMO

Watch our [demo](http://jupegarnica.github.io/asdfasdf.js/)

# Usage

asdfasdf depends on [jQuery](http://jquery.com/) and [jQuery.cookie](https://github.com/carhartl/jquery-cookie). Just add them if your are not using them and init calling asdfasdf.js (is not needed to wait until the DOM is ready)

```HTML
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/jquery.cookie.min.js"></script>
  <script type="text/javascript" src="js/asdfasdf.js"></script>
  <script type="text/javascript" >
        asdfasdf(); 
  </script>
```
asdfasdf is totally configurable passing a setting object when called.
```javascript
  asdfasdf({elements:'input.autosave'});
```
The default setting is:

```javascript
 var defaultsetting = {
        //show feedback when autosave data
        showFeedback: true,  
        
        //show feedback when autoload data
        showLoaded: true,     
        
        // feedback message properties
        msgLoadDataText: "Data Loaded", 
        msgStyle: "position: fixed;top: 2em;color: white;background: tomato;right: 50%;transform: translateX(50%);width: auto;display: inline-block;padding: 0.5em;border-radius: 0.3em;text-transform: uppercase;",
        msgText: "auto saved",
        msgHide: 500,
        
        //Elements to be saved
        elements: 'input, textarea, select',
        
        //Time to keep the data
        expires: 2,
    }
```javascript



# Features

* Autosave for all kind of inputs:  RADIO, CHECKBOX, TEXT, TEXTAREA, SELECT
* Auto load when the user return to the form.
* Save codificated data on cookies for privacity.
* Feedback when saving and loading data.
* Ultra Fast! just 4k
* Want more?  buy a [Swiss Army knife](http://en.wikipedia.org/wiki/Swiss_Army_knife)



# Documentation

Not needed :D

# LICENSE

The MIT License (MIT)

Copyright (c) 2015 jupegarnica <jupegarnica@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

# Author

Made well but quickly by [jupegarnica.com](http://jupegarnica.com)