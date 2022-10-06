# okayokay

## architecture modulaire

- feature modules : ces modules encapsulent tous les éléments d'un "feature" de votre application – ce qui définit un "feature" peut parfois être flou, mais dans l'exemple de l'application Snapface, on pourrait distinguer deux features : la landing page, et toute la gestion des FaceSnaps ;

- core modules : ce type de module contient tout ce que l'on importe une seule fois dans application (les core modules sont eux-mêmes importés une seule fois, la majorité du temps dans AppModule) – les services, les modèles, et les intercepteurs par exemple, ou des components comme HeaderComponent dans Snapface ;

- shared modules : ce sont des modules qui regroupent des éléments utilisés à plusieurs endroits de l'application – il importe et déclare tous ces éléments et les réexporte, permettant à n'importe quel module de tout importer d'un coup.
