# Jonas Weko — Landing page MVP

Landing page one-page Next.js pour Jonas Weko, consultant indépendant spécialisé en analyse de risque politique et monétaire sur l’Afrique de l’Ouest.

## Déploiement Vercel

Si le domaine Vercel affiche une page `404`, vérifier en priorité ces points :

1. **Branche déployée** : Vercel doit déployer la branche qui contient `package.json`, `app/page.tsx` et `app/layout.tsx`.
   - Dans ce dépôt, le travail applicatif est sur la branche courante.
   - Si Vercel est connecté à `main` mais que `main` ne contient que l’initialisation du dépôt, Vercel servira une 404.
   - Solution : définir la bonne *Production Branch* dans Vercel, ou merger cette branche vers `main`.

2. **Root Directory** : laisser le champ vide ou mettre `.`.
   - Le projet Next.js est à la racine du dépôt, pas dans un sous-dossier.

3. **Framework Preset** : choisir `Next.js`.
   - Le fichier `vercel.json` force aussi ce preset côté dépôt.

4. **Build & install** : utiliser les commandes standard.
   - Install Command : `npm install`
   - Build Command : `npm run build`
   - Output Directory : laisser vide pour Next.js.

5. **Variables d’environnement** : renseigner au minimum les variables listées dans `.env.example` pour que les formulaires fonctionnent en production.
   - La page peut s’afficher sans clé Resend, mais les formulaires échoueront tant que `RESEND_API_KEY`, `RESEND_FROM` et `CONTACT_TO` ne sont pas configurés.

6. **Erreur 403 sur `registry.npmjs.org`** : si les logs indiquent `403 Forbidden - GET https://registry.npmjs.org/...`, ce n’est pas une erreur Next.js, Resend ou landing page.
   - Le fichier `.npmrc` force déjà le registre public npm.
   - Vérifier que l’environnement d’exécution n’injecte pas de proxy npm (`npm_config_http_proxy`, `npm_config_https_proxy`, `HTTP_PROXY`, `HTTPS_PROXY`) qui bloque l’accès au registre.
   - Dans un environnement sandbox/proxy qui bloque npm, relancer `npm install` puis `npm run build` en local, sur GitHub Actions ou directement sur Vercel.

## Variables d’environnement

```bash
RESEND_API_KEY=
RESEND_FROM=
CONTACT_TO=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

## Développement local

```bash
npm install
npm run dev
```

## Vérification avant déploiement

```bash
npm run lint
npm run build
```
