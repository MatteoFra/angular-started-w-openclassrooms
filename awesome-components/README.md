ng new awesome-components --style=scss --skip-tests=true --routing

ng add @angular/material

ng g m core
ng g m shared
ng g m social-media --routing (lazy loading)

ng g c core/components/header

ng g c social-media/components/post-list (smart)
ng g c social-media/components/post-list-item (dumb)

ng g c shared/components/comments --export

