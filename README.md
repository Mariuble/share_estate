# Røddi

This is the project for our TDT4140 group.

## How to run
### Install Required Python Modules
```bash
pip install -r requirements.txt
```

#### Start webserver
From the root, go into the ```roddi``` folder:
```bash 
cd roddi
```
Next, make migrations from the Modules
```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

Last, run the web server
```bash
python mangage.py runserver
```

#### Install Node Modules
_You will need to open a new terminal to do this._

From the root, first go into the ```roddi``` folder, then cd into ```frontend```.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```
Then, compile the frontend (for development)
```bash
npm run dev
```
If you want to run the production compile script instead of the development, write this;
```bash
npm run build
```


## Brukerhistorier

Definition of done: Gjennomføre en godkjent demo.

**Sprint 1 - Winter**
1. (1) Som eier ønsker jeg at all data lagres persistent på nettsiden slik at ikke alt trenger å skje live.
    - How to demo: Logge inn på to forskjellige tidspunkt og se tidligere endringer (også fra andre brukere).

2.  (2) Som bruker vil jeg kunne opprette en profil og logge inn for å kunne delta i et dødsbo.
    - How to demo: Opprette en profil og logge inn på tilsvarende profil.

3. (3) Som en administrator vil jeg kunne opprette et dødsbo for å kunne komme i gang
    - How to demo: Vise at en admin kan opprette en dødsbo og ha tilgang til adminsiden.

4. (5) Som eier vil jeg ha de samme rettighetene/ tilgangene som administratorer for å kontrollere tjenesten min.
    - How to demo: Vise at en eier kan opprette en dødsbo og ha tilgang til adminsiden.

5. (4) Som en innlogget bruker vil jeg kunne se en oversikt over mine oppgjør slik at jeg enkelt kan finne dem igjen.
    - How to demo: Logge inn med en bruker og se en liste over tilhørende dødsbo.

**Sprint 2 - Spring**
1. (6) Som administrator vil jeg kunne administrere brukere for å sørge for at riktige brukere har tilgang
    - How to demo: Logg inn i adminpanelet, se at man endre brukers tilhørighet til dødsbo

2. (7) Som administrator vil jeg kunne legge inn eiendeler
    - How to demo: Legg inn en ekstra gjenstand i et dødsbo og sjekk at denne gjenstanden dukker opp på dødsboet på nettsiden

3. (10) Som en bruker vil jeg kunne kommentere på eiendeler for å komme med forslag/ ønsker
    - How to demo: Gå til en eiendel og vis at en kommentar blir postet

4. (9) Som en bruker vil jeg kunne legge inn mine prioriterte ønsker for å komme til en enighet
    - How to demo: La en bruker skrive en kommentar med prioritering og se at dette kommer inn i admin-panelet

5. (8) Som administrator vil jeg kunne se status på alle gjenstander for å se om oppgjøret er fullført
    - How to demo: Se i admin-panelet hvilke gjenstander som ikke har nok kommentarer

**Sprint 3 - Summer**
1. (11) Som administrator vil jeg kunne moderere kommentarer på eiendeler for å unngå dårlig stemning
    - How to demo: Logg inn på adminpanelet, slett en kommentar, vis at kommentaren er borte fra nettsiden,

2. (14) Som bruker vil jeg bestemme om en gjenstand skal doneres bort, kastes eller fordeles imellom etterlatte
    - How to demo: Legg inn en kommentar om et ønske om å gi bort. Vise at admin kan sette assign

3. (12) Som administrator vil jeg kunne gi varsel til brukere om at de må fullføre oppgjøret
    - How to demo: Lag et varsel til en bruker og vis at denne dukker opp på brukeren sin profil når han logger inn. 

4. (13) Som eier vil jeg se en oversikt over ulik info om bruk av tjenesten
    - How to demo: Logg inn på adminpanel, vis statistikk og forklar

5. (15) Som bruker av nettsiden vil jeg bli møtt av en pen nettside/ app slik at jeg koser meg mens jeg bruker tjenesten
    - How to demo: Logg inn, vis et pent grensesnitt
