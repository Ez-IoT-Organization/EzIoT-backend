import warnings
from gpiozero import DistanceSencor
from time import sleep
from pythonosc import osc_message_builder
from pythonosc import udp_client

warnings.filterwarnings("ignore")

sensor = DistanceSensor(echo = 17, trigger = 4)
sender = udp_client.SimpleUDPClient('127.0.0.1', 4559)

x = sensor.distance
print(round(x,3))
pitch = round(x*100+30)
sender.send_message('/play_this', pitch)
