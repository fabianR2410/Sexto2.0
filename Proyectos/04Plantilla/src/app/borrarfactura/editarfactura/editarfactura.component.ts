import { Component } from '@angular/core';
import { FacturasComponent } from '../borrarfactura.component';
@Component({
  selector: 'app-factura',
  templateUrl: './facturas.component.html',
   styleUrl: './facturas.component.scss'
  
})
export class FacturaListaComponent implements OnInit {
  facturas: idFacturas[] = [];

  constructor(private factura: FacturasComponent, private router: Router) {}

  ngOnInit(): void {
    this.obtenerFacturas();
  }

  obtenerFacturas(): void {
    this.factura.getFactura().subscribe(
      (data: Factura[]) => {
        this.facturas = data;
      },
      (error) => {
        console.error('Error al obtener las facturas:', error);
      }
    );
  }

  editarFactura(id: number): void {
    this.router.navigate(['/facturas/editar', id]);
  }
}