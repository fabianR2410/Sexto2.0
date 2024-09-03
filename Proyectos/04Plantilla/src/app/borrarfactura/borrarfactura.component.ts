
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { IFactura } from '../Interfaces/factura';
import { Router, RouterLink } from '@angular/router';
import { FacturaService } from '../Services/factura.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './borrarfactura.component.html',
  styleUrl: './borrarfactura.component.scss'
})
export class FacturasComponent implements OnInit {
  listafacturas: IFactura[] = [];
  constructor(private facturaServicio: FacturaService) {}
  ngOnInit(): void {
    this.facturaServicio.todos().subscribe((data: IFactura[]) => {
      this.listafacturas = data;
    });
  }

  eliminar(idFactura) {

    Swal.fire({
      title: 'Factura',
      text: 'Esta seguro que desea eliminar la factura!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Emliminar Factura'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facturaServicio.eliminar(idFactura).subscribe((data) => {
          Swal.fire('Factura', 'La factura ha sido eliminada.', 'success');
        this.ngOnInit();
        });
      }
    });
  }

  actualizar (idFactura) {
   Swal.fire({
    title: 'Factura',
    text: 'Esta seguro que desea editar la factura!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Editar Factura'
  }).then((result) => {
    if (result.isConfirmed) {
      this.facturaServicio.actualizar(idFactura).subscribe((data) => {
        Swal.fire('Factura', 'La factura ha sido editada.', 'success');
      this.ngOnInit();
      });
    }
  });
}
}
