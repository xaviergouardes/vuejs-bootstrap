# vuejs-bootstrap
Comment intégrer bootstrap dans une application VueJS ?

# Ressources Web
- https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0

# Grandes etapes
### Installer VueJS - CLI
```
npm install -g @vue/cli
```
### Créer une application VueJS simple
```
vue create withbootstrap
cd withbootstrap
npm run serve
```

### Ajouter une div avec un style bootstrap dans la page d'accueil
withbootstrap/src/components/HelloWorld.vue
```
<div class="alert alert-success alert-dismissible fade show" role="alert">
  With Bootstrap!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

### Installer bootstrap & importer dans le projet
```
npm install bootstrap jquery popper.js --save
```
withbootstrap/src/main.js:
```
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```