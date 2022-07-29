## How to use

This program uses Chrome as the default browser and will not work with other browsers.

1. Install Chrome browser driver

* Check your version of Chrome and use the below link to install the correct browser driver.
* [Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/)

2. Add the driver to your PATH

* Guide in the Drivers link above
* You can equally move the driver to an existing directory already in your PATH.
  For example if you have `usr/local/bin` in your PATH you can do the following:

  ```
  $ mv ~/path/to/chromedriver /usr/local/bin
  ```
* Run the command `chromedriver` from the command line to ensure it starts up successfully, close once confirmed.

3. Clone git repo
4. `cd` into repo and run `npm install`
5. Add `contacts.js` file to root of project (If your profile is within the list, please remove it.)
6. Run `node adder.js` from the command line to execute the program
