(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    // private httpAdapter: Object;

    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private masterEmail: string = "ossyyrr@gmail.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admin") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["ossyyrr@gmail.com"], "to-clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    AddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productBloc = new ProductBloc();
  const cardBloc = new CartBloc();
  const productService = new ProductService();

  productBloc.loadProduct(10);
  productService.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cardBloc.AddToCart(10);
})();
