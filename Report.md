# Quest 3 Report

Authors: Genny Norman, Cameron MacDonald Surman, Ruby Zaveri, 10-30-18

## Summary

In this quest we established a WIFI connection with the ESP32 and transferred data from the ESP32 to a web client. We used an HTTP server on the ESP32 transferred data using GET from the client. We also integrated control of our servo and IR sensor with the HTTP server. We brought up a separate RPi as an independent webcam to stream our device.


## Evaluation Criteria

- Send data across a separate IP network to control a servo through web client.
- Receives data across separate IP network from IR sensor into web client.
- Incorporates time and appliance scheduling via web client
- Integrates Rpi webcam into web client

## Solution Design
The esp32 webserver operated using GET requests from the client, our Node.js local server. It had the ability to turn an LED on or off, as well as return distance data from an IR rangefinder. GET requests were used due to their ease of implementation and because security/validation were not required for this quest. For example, /toggleon/ would return '1' on success and turn on the LED, /toggleoff/ would return '0' on success and turn off the LED, and /ir/ would return the current distance value returned from the IR rangefinder. These commands were accessed via port forwarding and DDNS. Our DDNS was provided by NO-IP.com at http://group16.ddns.net. Our esp32 webserver was located at port 80, and our webcam stream was located at port 2100.


## Sketches and Photos
[Quest Video](https://drive.google.com/open?id=1zzLzIi0CHRPTCbPmuJpBohDrVgxo4Ina)

esp32 portable webserver
![esp32](https://i.imgur.com/RHG8kPW.jpg)

screenshot of user interface
<img src="./images/ui_sc.png" />

screenshot of Rpi webcam configuration
![screenshot of Rpi webcam configuration](https://i.imgur.com/OZoeS8w.png)

## Supporting Artifacts

[WIFI station example ](https://github.com/user/repo/blob/branch/other_file.md)

[ESP32 server example](https://github.com/espressif/esp-idf/tree/master/examples/protocols/http_server/simple)
