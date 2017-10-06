# labInfo
Versorgt die LapInfoDisplays mit Content.

## neuen Content anlegen:
1. URLs in app.py in pageList einfügen: ```{'url': 'http://neuercontent.de', 'time': 15},```
2. Git push
3. im Lab in odoo einlogen: ```ssh fabi@odoo```
4. in den Ordner labinfo wechseln.
5. git pull
6. Service neustarten: ```systemctl restart labinfo.service```
7. LabInfoDisplays über das Labnet aus- und wieder einschalten.

## Content auf Gerät anzeigen
Einfach (im Lab) die URL odoo:8085 öffnen.
