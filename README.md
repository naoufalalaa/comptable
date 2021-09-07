# Comptable du coin

> This project is for an internship @ ASTROLOST
### First let's understand the concept of it all

I was asked to make a frontend application, design, logic, API connexion. 

For the developement of the template, as you would know if you ever checked my other projects, I use **UIKIT** and that is due to its compatibility with bootstrap which I decided not to use. 

UIkit gives a large hand of technical choices and it is easier to manipulate than other web ui frameworks. 

###### if you ever wanted to check their documentation : https://getuikit.com/

Furthermore this application is using a very powerful technology which is reactJS :electron:
>all projects strat with : 

```
npx create-reactapp
```
## assets

### Used Dependencies 
> react-router-dom 

```
npm install react-router-dom
```
Allow us to use ***{Link , BrowserRouter , Route , Switch }***

> axios
```
npm install axios
```
Allow us to use fetch functions and promises to **get** OR **post** OR **put** OR **delete** data

### Landing Page
 
![interface](https://i.ibb.co/fqcN7d7/Capture-d-e-cran-2021-09-05-a-21-54-49.png) Contains different informations about the utility and tools on the plateform, explains the ownership. **Technical aspect** we can specify that different proprieties had been changed and modified in a way to suit the modern templating designs.

### Sign up
 
![signup](https://i.ibb.co/HKYMvb3/signup.png) fields with password verification and 3 different states; 
```diff
! different passwords
- wrong confirmation password
+ exact same password
```
### Login
*Optional on signup because login and connection is made automatically on signing up.*

![login](https://i.ibb.co/gDwnfBX/login.png) 
With error message if the combinaison is fault.
```diff
- Utilisateur introuvable.
```



