# VueDatalakeCodesandbox

## THIS VERSION DOES NOT WORK IN GITHUB HOSTED PAGES OR YOUR LOCAL SYSTEM. For the working version, refer to https://github.com/bensjx/VueNusDatalake

## About
This repo make use of Vue to visualize the NUS Datalake synthetic data. We pull data directly from the spreadsheet tabs as csv data and display them in graph and charts.

## Demo
https://codesandbox.io/s/github/bensjx/VueDatalakeCodesandbox/tree/master/

## Packages
1. Papaparse: Load csv data from google sheets and transform them into an object to be processed in Vue.
https://www.papaparse.com/
2. Vue Chartkicks: Used to visualise our data. This is a very simple way to display charts (in just 1 line). If you want to display more complicated charts you might want to consider other packages.
https://chartkick.com/vue

## CORS error
Since this version does not run on codesandbox, you will have to download the file, edit and run it all on your local system. Please do note that if you try to run the web page from your local system, you will encounter a cross-origin error when clicking on the button to retrieve data from google spreadsheet. To resolve this, download the following extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en. I have yet to find a simpler method to overcome this error other than making use of the extension.
<br>

Only activate the extension when you are clicking on the button to retrieve data from google spreadsheet. Else, remember to turn it off as it will result in a lot of web pages not working correctly.
<br>

Also, once you committed your changes, you will be able to run your web page from github hosted pages WITHOUT the need for that extension. It is only needed when you are testing your web page and running it from your local system.
