## Preuzimanje projekta

Ukoliko nije instaliran, potrebno je instalirati [Git](https://git-scm.com/download/win) na računaru.

Koraci za kloniranje projekta sa GitHub-a:
- U terminalu Visual Studio Code-a pozicionirati se na folder u koji će biti kloniran projekat
- Naredbom **git clone https://github.com/RVAIIS/Frontend-ITx-xxxx-Ime-Prezime** (kopirati url Vašeg privatnog repozitorijuma za frontend deo kreiran pomoću GitHub Classroom-a)
projekat je kloniran sa GitHub-a

## Pokretanje aplikacije

**Pre pokretanja frontend aplikacije, pokrenuti backend aplikaciju.**

###### CORS

Instalirati Chrome plugin: [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)

dodati u **Intercepted URLs or URL patterns** sledeće URL-ove:

- http://localhost:8083/
- http://localhost:4200/

Omogućiti **Enable cross-origin resource sharing** u Chrome-u.

U integrisanom Terminalu VSC-a, **pozicionirati se unutar kloniranog projekta** i izvršiti sledeće naredbe:
- **npm install** - za preuzimanje node-modules (modula potrebnih za pokretanje aplikacije) 
- **ng serve** - pokretanje aplikacije (aplikacija je pokrenuta na portu 4200 i može joj se pristupiti pomoću Chrome-a na linku: http://localhost:4200/)


## Komitovanje projekta

U integrisanom Terminalu VSC-a izvršiti sledeće naredbe:
- **git add .** - dodaje modifikovane i nove fajlove na stage  
Ukoliko ne prepoznaje korisnika potrebno je pokrenuti (zameniti sa Vašim e-mail-om i username-om):  
**git config --global user.email "email@example.com"   
git config --global user.name "username"**
- **git commit -m "Inicijalni commit"** - komituje u lokalni repozitorijum sa odgovarajućim komentarom
- **git push origin master** - "šalje" u GitHub repozitorijum (uneti username i password za GitHub ukoliko zatraži)