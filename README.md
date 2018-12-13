# VueDatalakeCodesandbox

## THIS VERSION DOES NOT WORK IN GITHUB HOSTED PAGES OR YOUR LOCAL SYSTEM. For the working version, refer to https://github.com/bensjx/VueNusDatalake

## About
This repo make use of Vue to visualize the NUS Datalake synthetic data. We pull data directly from the spreadsheet tabs as csv data and display them in graph and charts.

## Demo
https://codesandbox.io/s/github/bensjx/VueDatalakeCodesandbox/tree/master/

## Packages
1. Papaparse: Load csv data from google sheets and transform them into an object to be processed in Vue.
https://www.papaparse.com/
<br>
Since we are using codesandbox, click on "Add Dependency" at the left hand column and search for papaparse.
After adding, rememebr to import it (first line of index.js).
2. Vue Chartkicks: Used to visualise our data. This is a very simple way to display charts (in just 1 line). If you want to display more complicated charts you might want to consider other packages.
https://chartkick.com/vue

## CORS error
Since this version only works on codesandbox, you should not encounter CORS error.
