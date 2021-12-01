# EzIoT-backend
This is team's Ez IoT backend repository

## Installation guide
To install the PubSound bash functionality use curl:
```
curl -LO https://raw.githubusercontent.com/Ez-IoT-Organization/EzIoT-backend/master/InstallSim
bash InstallSim
```
This will install the neccssary files and make PubSound bash script a command. 

To install the raspberry client for sending real time data to a web server use the following commands:
```
curl -LO https://raw.githubusercontent.com/Ez-IoT-Organization/EzIoT-backend/master/InstallRaspClient
bash InstallRaspClient
```

## Updates
### Update Nov 11 2021
Added a linux bash script for raspberry pi's to send data to database by passing a *.csv file.

The used example *.csv files were added to test the data. Remember to add them in order: Data, Data2, Data3.

Password and ip address were removed from the script

### Update Nov 16 2021
Updated bash script for raspberry that sends data to database.

### Update Nov 27 2021
Added installation script for simulating a sensor in a device.

Added installation script for detecting data on a raspberrypi with a sensor

