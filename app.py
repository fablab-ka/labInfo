import sqlite3
import datetime
import json
from bottle import Bottle, route, run, debug, template, static_file, request
import urllib2

app = Bottle()


pageList = [
    {'url': 'http://192.168.1.194:8080/kvv_table?station=de:8212:7&entries=9', 'time': 15},
    {'url': 'http://fablabka.tweetwally.com', 'time': 15},
]

@app.get('/<device>')
def kvv_search_device(device):
    # newNumber = (pageNumber + 1) % len(pageList);
    return template('iframe_page')

@app.get('/')
def kvv_search():
    # newNumber = (pageNumber + 1) % len(pageList);
    return template('iframe_page')

@app.get('/getpagelist')
def getPageList():
    return json.dumps(pageList)

@app.route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root='static/')

run(app, host='0.0.0.0', port=8085)
